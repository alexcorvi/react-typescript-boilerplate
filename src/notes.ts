import { observable, computed } from 'mobx';

export interface Note {
	text: string;
	done: boolean;
}

export class Notes {
	@observable currentFilter: 'active' | 'completed' | 'all' = 'all';

	@observable notes: Note[] = [];

	@computed
	get active(): Note[] {
		return this.notes.filter((note) => note.done === false);
	}

	addNote(note: Note) {
		this.notes.push(note);
	}

	removeNote(index: number) {
		this.notes.splice(index, 1);
	}

	toggleCompleted(index: number) {
		this.notes[index].done ? (this.notes[index].done = false) : (this.notes[index].done = true);
	}

	updateText(index: number, text: string) {
		this.notes[index].text = text;
	}

	clearCompleted() {
		this.notes = this.notes.filter((note) => note.done === false);
	}
}
