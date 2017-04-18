import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Notes } from "../../notes";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { SingleNote } from "../note/note";

export interface Props {
	notes: Notes;
}


@observer
export class Main extends React.Component<Props, {}> {
	render() {
		return (
			<article className="todoapp">
				<Header notes={this.props.notes} />
				<ul className="todo-list">
					{
						this.props.notes.notes.map(
							(note, index) => {
								if (
									(this.props.notes.currentFilter === "all") ||
									(this.props.notes.currentFilter === "active" && note.done === false) ||
									(this.props.notes.currentFilter === "completed" && note.done === true)
								)
								{
									return <SingleNote notes={this.props.notes} key={index} note={note} index={index} />
								}
								else { return ""; }
							}
						)
					}
				</ul>
				<Footer notes={this.props.notes} />
			</article>
		);
	}
}