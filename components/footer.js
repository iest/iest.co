import React, {Component} from 'react';
import BodyClassName from 'react-body-classname';

import Icn from 'components/icn';
import s from './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <BodyClassName className={s.body}>
        <footer className={s.footer}>
          <Icn name="instagram" />
        </footer>
      </BodyClassName>
    );
  }
}
