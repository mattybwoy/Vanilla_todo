//import { Note } from "../src/note";

class NoteList {
  constructor() {
    this.noteArray = [];
    this.sliceArray = [];
  }

  add(note) {
    let sliced = note.slice(0,20)
    this.sliceArray.push(sliced)
    this.noteArray.push(note)
  }
}