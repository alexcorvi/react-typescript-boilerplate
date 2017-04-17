import "./index.html";
import "./style.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";


import { MainComponent } from './components/main/main.component';
import { observable, computed} from 'mobx';

ReactDOM.render(
	<MainComponent welcome={"Alex"} />,
	document.getElementById('root')
);