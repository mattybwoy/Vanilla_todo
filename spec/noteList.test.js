import NoteList from "../src/noteList"
import Note from "../src/note"

describe("#NoteList", () => {
  it("Displays empty list if no notes are inside", () => {
    let noteList = new NoteList()
    expect(noteList.noteArray).toStrictEqual([])
  })
  
  it("Displays list of 1 note when user adds first item to list", () => {
    let noteList = new NoteList()
    noteList.add("buy bread")
    expect(noteList.noteArray).toContain("buy bread")
    expect(noteList.noteArray.length).toEqual(1)
  })

  it("Displays first 20 characters of note", () => {
    let noteList = new NoteList()
    noteList.add("buy bread and milk and juice")
    expect(noteList.sliceArray).toContain("buy bread and milk a")
  })
})