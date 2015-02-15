// Helpers
function setText(elm, text) {
  elm.innerText = text;
}
_ = function(selector) {
  return document.querySelector(selector);
};

function sanitiseData(str) {
  var arr = str.split('\n');
  return arr.filter(function(val) {
    var num = parseInt(val);
    return !isNaN(val) && val < 1e5 && val > 0;
  }).map(function(num) {
    return parseInt(num);
  });
}

function getUniques(arr, count) {
  var uniques = {};
  for (var i = 0; i < arr.length; i++) {
    uniques[arr[i]] = 1 + (uniques[arr[i]] || 0);
  }

  var filtered = [];
  for (var k in uniques) {
    if (uniques[k] >= count) {
      for (var ii = 0; ii < uniques[k]; ii++) {
        filtered.push(parseInt(k));
      }
    }
  }
  return filtered;
}

function drawHistogram(elm, dataArr, withLabels) {

  d3.select(elm).select('svg').remove();

  var values = dataArr;
  var mean = d3.mean(values);
  var min = d3.min(values);
  var max = d3.max(values);
  var stdDev = d3.deviation(values);

  var margin = {
    top: withLabels ? 30 : 10,
    right: 30,
    bottom: 50,
    left: withLabels ? 30 : 60
  };
  var width = elm.offsetWidth - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .domain(withLabels ? [mean - stdDev, mean + stdDev] : [min, max])
    .range([0, width]);

  // Generate a histogram
  var data = d3.layout.histogram()
    .range(withLabels ? [mean - stdDev, mean + stdDev] : [0, max])
    .bins(x.ticks(400))
    (values);

  var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
      return d.y;
    })])
    .range([height, 0]);

  // X axis scale with labels
  var xAxis = d3.svg.axis()
    .ticks(5)
    .scale(x)
    .orient("bottom")
    .tickFormat(function(d) {
      return d / 1000 + "k";
    });

  // Y axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(function(d) {
      return d / 100;
    });

  // Create the svg
  var svg = d3.select(elm).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create the bars
  var bar = svg.selectAll(".bar")
    .data(data)
    .enter().append("g")
    .attr("class", function(d, i) {
      return d.y < 300 && withLabels ? "bar-alt" : "bar";
    })
    .attr("transform", function(d) {
      return "translate(" + x(d.x) + "," + y(d.y) + ")";
    });

  // Add each bar
  bar.append("rect")
    .attr("x", 1)
    .attr("width", (x.range()[1] - x.range()[0]) / data.length)
    .attr("height", function(d) {
      return height - y(d.y);
    });

  // Add bar labels
  if (withLabels) {
    bar.append("text")
      .attr("class", "bar-label")
      .attr("style", function(d) {
        return d.y > 300 && withLabels ? "" : "display:none;visibility:hidden;";
      })
      .attr("y", 0)
      .attr("dy", "-0.5em")
      .attr("x", ((x.range()[1] - x.range()[0]) / data.length) / 2)
      .attr("text-anchor", "middle")
      .text(function(d, i) {
        return d.x;
      });
  }

  // Draw the xAxis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  // xAxis label
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("class", "label")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("Fold height(px)");

  // Draw the yAxis
  if (!withLabels) {
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
    // yAxis label
    svg.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("dx", -250)
      .attr("dy", -30)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "start")
      .attr("class", "label")
      .text("Count x100");
  }
}

function init() {
  d3.text('/scripts/folds.txt', function(err, str) {
    if (err) {
      throw new Error('Failed to fetch fold data');
    }

    var data = window.test = sanitiseData(str);

    // Set all the static numbers
    setText(_('#total'), data.length);
    setText(_('#unique'), data.filter(function(val, i, arr) {
      return arr.indexOf(val) === i;
    }).length);

    var mean = d3.mean(data);
    setText(_('#mean'), mean.toFixed(0) + 'px');
    setText(_('#median'), d3.median(data) + 'px');

    var deviation = d3.deviation(data);
    setText(_('#deviation'), deviation.toFixed(0) + 'px');

    function drawAllGraphs() {
      drawHistogram(_(".histogram-all"), data);
      drawHistogram(_(".histogram-3"), getUniques(data, 3));
      drawHistogram(_(".histogram-300"), getUniques(data, 3), true);
    }

    drawAllGraphs();

    window.addEventListener('resize', drawAllGraphs);
  });
}

init();
