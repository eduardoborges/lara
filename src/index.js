import { render } from "react-dom";
import React from "react";

import App from './App';

// styles
import './assets/styles/main.css';
import 'react-dynamic-swiper/lib/styles.css';
import 'animate.css/animate.css';
import 'react-input-range/lib/css/index.css';

render(
    <App />,
    document.getElementById('root')
)