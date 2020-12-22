export default class NoteList {
  constructor(noteArray) {
    this.noteArray = [];
  }

  add(note) {
    this.noteArray.push(note)
  }
}