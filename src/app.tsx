import "./index.html";
import "./style.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";


import { Temperature } from './components/temperature/temperature';

ReactDOM.render(
	<Temperature demoTitle="Temperature convertor" />,
	document.getElementById('root')
);