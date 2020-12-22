import NoteList from "../src/noteList"

describe("#NoteList", () => {
  it("Displays empty list if no notes are inside", () => {
    let noteList = new NoteList()
    expect(noteList.noteArray).toStrictEqual([])
  })
  
  it("Displays list of 1 note when user adds first item to list", () => {
    let noteList = new NoteList()
    noteList.add("Buy bread")
    expect(noteList.noteArray.length).toEqual(1)
  })
})