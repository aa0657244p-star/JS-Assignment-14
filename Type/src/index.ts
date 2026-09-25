import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { Note } from "./models/Note";
import { NoteBook } from "./models/NoteBook";
import { Storage } from "./utils/Storage";

let user1 = new User(1, "Mesho", "mesho@test.com", "12345678", "0123456789", 25);
user1.displayInfo();

var admin1 = new Admin(2, "Admin", "admin@test.com", "admin12345", "0111111111", 30);
admin1.displayInfo();

var note1 = new Note(1, "First Note", "This is the content of the first note", user1);
console.log("Preview:", note1.preview());

var notebook1 = new NoteBook(1, "My Notebook");
notebook1.addNote(note1);
admin1.manageNotes(note1);

const storage = new Storage<string>();
storage.addItem("mesho");
storage.addItem("mesho");
console.log("Storage:", storage.getAllItems());