import { render } from "react-dom";
import React from "react";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// styles
import './assets/styles/main.css';
import 'react-dynamic-swiper/lib/styles.css';
import 'animate.css/animate.css';
import 'react-input-range/lib/css/index.css';

render(
    <App />,
    document.getElementById('root')
)

registerServiceWorker();