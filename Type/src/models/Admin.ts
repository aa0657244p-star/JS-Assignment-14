import { User } from "./User";
import { Note } from "./Note";

export class Admin extends User {
    private managedNotes: Note[] = [];

    manageNotes(note: Note): void {
        this.managedNotes.push(note);
        console.log(`Admin ${this.name} is managing note: ${note.title}`);
    }

    getManagedNotes(): Note[] {
        return this.managedNotes;
    }
}