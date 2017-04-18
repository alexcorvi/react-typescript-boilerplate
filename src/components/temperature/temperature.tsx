import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import "./temperature.scss";

export interface MainProps {
	demoTitle: string;
}

enum units { kelvin, celsius, fahrenheit };

@observer
export class Temperature extends React.Component<MainProps, {}> {

	@observable fromVal = 33;
	@observable fromUnit = units.celsius;
	@observable toUnit = units.celsius;

	@computed get inCelsius(): number {
		if (this.fromUnit === units.kelvin) { return this.k2c(this.fromVal); }
		else if (this.fromUnit === units.fahrenheit) { return this.f2c(this.fromVal); }
		return this.fromVal;
	}

	@computed get result(): number {
		if (this.toUnit === units.fahrenheit) { return this.c2f(this.inCelsius); }
		if (this.toUnit === units.kelvin) { return this.c2k(this.inCelsius); }
		return this.inCelsius;
	}

	// conversion formulas
	f2c(f: number): number {
		return (f - 32) * (5 / 9);
	}
	c2f(c: number): number {
		return (c * (9 / 5)) + 32;
	}
	k2c(k: number): number {
		return k - 273.15;
	}
	c2k(c: number): number {
		return c + 273.15;
	}

	render() {
		return (
			<div className="temperature">
				<h2>{this.props.demoTitle}</h2>
				<div>
					From:
					<input defaultValue={this.fromVal.toString()} type="number" onChange={($e) => { this.fromVal = parseFloat($e.target.value); }} />
					<select defaultValue={this.fromUnit.toString()} onChange={($e) => { this.fromUnit = parseFloat($e.target.value); }}>
						<option value={units.celsius} >Celsius</option>
						<option value={units.fahrenheit} >Fahrenheit</option>
						<option value={units.kelvin} >Kelvins</option>
					</select>
				</div>
				<div>
					To:
					<select defaultValue={this.toUnit.toString()} onChange={($e) => { this.toUnit = parseFloat($e.target.value); }}>
						<option value={units.celsius} >Celsius</option>
						<option value={units.fahrenheit} >Fahrenheit</option>
						<option value={units.kelvin} >Kelvins</option>
					</select>
				</div>
				<div className="result">
					Result: {this.result}
				</div>
			</div>
		);
	}
}