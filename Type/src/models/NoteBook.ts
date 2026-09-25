import { Note } from "./Note";

export class NoteBook {
    public id: number;
    public name: string;
    private notes: Note[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addNote(note: Note): void {
        this.notes.push(note);
        console.log(`Note "${note.title}" added to "${this.name}"`);
    }

    removeNote(noteId: number): void {
        this.notes = this.notes.filter(n => n.id !== noteId);
        console.log(`Note with ID ${noteId} removed`);
    }

    getNotes(): Note[] {
        return this.notes;
    }
}