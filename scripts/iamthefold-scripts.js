/**
 * TODO:
 * - Total folds
 * - Uniques
 * - Mean
 * - Median
 * - Histogram of totals/uniques
 * - Histogram of in range of most common
 */

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
  var min = d3.min(values);
  var max = d3.max(values);
  var formatCount = d3.format(",.0f");
  var margin = {
    top: 10,
    right: 30,
    bottom: 50,
    left: 60
  };
  var width = elm.offsetWidth - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .domain([min, max])
    .range([0, width]);

  // Generate a histogram
  var data = d3.layout.histogram()
    .bins(x.ticks(700))
    (values);

  // Y axis
  var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) {
      return d.y;
    })])
    .range([height, 0]);

  // X axis scale with labels
  var xAxis = d3.svg.axis()
    .ticks(5)
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

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
    .attr("class", "bar")
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
      .attr("class", "bar-hover")
      .attr("dy", ".75em")
      .attr("y", 6)
      .attr("x", ((x.range()[1] - x.range()[0]) / data.length) / 2)
      .attr("text-anchor", "middle")
      .text(function(d,i) {
        return d[i];
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
    .attr("y", height + margin.top + margin.bottom - 20)
    .text("Fold height");

  // Draw the yAxis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
}

// Download the file and let rip
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

  function drawAllGraphs(){
    drawHistogram(_(".histogram-all"), data);
    drawHistogram(_(".histogram-3"), getUniques(data, 3));
    drawHistogram(_(".histogram-300"), getUniques(data, 300), true);
  }

  drawAllGraphs();

  window.addEventListener('resize', drawAllGraphs);
});
