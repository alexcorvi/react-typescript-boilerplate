import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import "./main.component.scss";

export interface MainProps {
	welcome: string;
}

@observer
export class MainComponent extends React.Component<MainProps, {}> {
	@observable num: number = 1;
	@observable randNumbers: number[] = [];
	@observable inputBinding: string = "Hello World!";
	@computed get roundedRandNum() {
		return this.randNumbers.map(x => x.toFixed(3));
	}
	@computed get valBy100() {
		return this.num * 100;
	}
	@computed get paddedProp() {
		return "[" + this.props.welcome + "]";
	}
	demoStyle: React.CSSProperties = {
		background: "#f5f5f5"
	};
	increment() {
		this.num = this.num + 1;
	}
	addRandomNumber() {
		this.randNumbers.push(Math.random());
	}
	setBindingValue(event: React.ChangeEvent<HTMLInputElement>) {
		this.inputBinding = event.target.value;
	}
	render() {
		return (
			<div className="main-component">

				<h2>React & Mobx Application Boilerplate</h2>

				<h3>Demos</h3>

				<div style={this.demoStyle} className="demo">
					<p>Number: {this.num}</p>
					<p>Number * 100 : {this.valBy100}</p>
					<p><button onClick={() => { this.increment() }}>Increment</button></p>
				</div>

				<div style={this.demoStyle} className="demo">
					<p>Random numbers list</p>
					<button onClick={() => { this.addRandomNumber() }}>Add Random Number</button>
					<ul>
						{this.roundedRandNum.map((x, i) => (<li key={i}>{x}</li>))}
					</ul>
				</div>

				<div style={this.demoStyle} className="demo">
					<p>Setting a getter on a prop</p>
					<p>{this.paddedProp}</p>
				</div>

				<div style={this.demoStyle} className="demo">
					<p>Input Binding</p>
					<p>{this.inputBinding}</p>
					<p>
						<input
							type="text"
							value={this.inputBinding}
							onChange={($event) => { this.setBindingValue($event) }}
						/>
					</p>
				</div>
			</div>
		);
	}
}
