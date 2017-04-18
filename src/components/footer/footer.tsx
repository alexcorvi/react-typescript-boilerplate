import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Notes } from "../../notes";

import "./footer.scss";

export interface Props {
	notes: Notes;
}

@observer
export class Footer extends React.Component<Props, {}> {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count"><strong>{this.props.notes.active.length}</strong> Items left</span>
				<ul className="filters">
					<li> 
						<a
							className={this.props.notes.currentFilter === "all" ? "selected" : "" }
							onClick={() => { this.props.notes.currentFilter = "all"; }}
						>
							All
						</a>
					</li>
					<li>
						<a
							className={this.props.notes.currentFilter === "active" ? "selected" : "" }
							onClick={() => { this.props.notes.currentFilter = "active"; }}
						>
							Active
						</a>
					</li>
					<li>
						<a
							className={this.props.notes.currentFilter === "completed" ? "selected" : "" }
							onClick={() => { this.props.notes.currentFilter = "completed"; }}
						>
							Completed
						</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={() => this.props.notes.clearCompleted()}>Clear Completed</button>
			</footer>
		);
	}
}