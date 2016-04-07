import React, {Component} from 'react';
import Markdown from 'react-remarkable';

import t from 'type.css';

export default class Blog extends Component {
  md = `
  # Blog

  Hello, I'm Iestyn. I write code and build interfaces.

  My name is Welsh for _Justin_, and is pronounced \`yes\` \`tin\`, in case you were wondering (you probably were).

  ## Some more about me

  I grew up on a remote hill farm in Wales, but now I live in foggy London town.

  ## Blog this site

  This is a static-served site built with react, babel, and webpack (and more).
  `
  render() {
    return (
      <div>
        <div className={t.article}>
          <Markdown source={this.md}/>
        </div>
      </div>
    );
  }
}
