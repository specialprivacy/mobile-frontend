import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
