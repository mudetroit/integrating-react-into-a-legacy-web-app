import React from 'react';
import ReactDOM from 'react-dom';

import {Footer} from './footer';

$.fn.holdsStatitics = function() {
    ReactDOM.render(<Footer todos={app.todos} />, this.get(0));
}
