import { Note } from "../src/note";

export default class NoteList {
  constructor() {
    this.noteArray = [];
  }

  add(note) {
    this.noteArray.push(note)
  }
}