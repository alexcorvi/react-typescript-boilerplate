import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Note, Notes } from "../../notes";

import "./note.scss";

export interface Props {
	note: Note;
	notes: Notes;
	index: number;
}

@observer
export class SingleNote extends React.Component<Props, {}> {
	@observable noteState: string = "";
	render() {
		return (
			<li className={
				"note-item " +
				(this.noteState === "edit" ? "editing " : "") +
				(this.props.note.done ? "completed" : "")
			}>
				<div className="view">
					<input
						type="checkbox"
						className="toggle"
						onChange={() => { this.props.notes.toggleCompleted(this.props.index); }}
						checked={this.props.note.done}
					/>
					<label
						onDoubleClick={() => {
							this.noteState = "edit";
							const el = document.getElementById("edit" + this.props.index);
							if (el !== null) { el.focus(); }
						}}
					>
						{this.props.note.text}
					</label>
					<button className="destroy" onClick={() => { this.props.notes.removeNote(this.props.index); }}></button>
				</div>
				<input
					id={"edit" + this.props.index}
					className="edit"
					value={this.props.note.text}
					onChange={($e) => { this.props.note.text = $e.target.value; }}
					onKeyDown={($e) => {
						if ($e.keyCode === 13) { this.noteState = "view"; }
					}}
				/>
			</li>
		);
	}
}