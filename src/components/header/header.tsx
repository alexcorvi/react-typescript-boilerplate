import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Notes } from "../../notes";

import "./header.scss";

export interface Props {
	notes: Notes;
}

@observer
export class Header extends React.Component<Props, {}> {

	@observable text: string = "";

	add(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.keyCode === 13) {
			this.props.notes.notes.push({
				done: false,
				text: this.text
			});
			this.text = "";
		}
	}

	render() {
		return (
			<header className="header">
				<h1>Todo</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					autoComplete="off"
					onKeyDown={($e) => { this.add($e); }}
					onChange={($e) => { this.text = $e.target.value; }}
					value={this.text}
				/>
			</header>
		);
	}
}