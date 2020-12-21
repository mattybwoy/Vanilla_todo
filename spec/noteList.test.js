import NoteList from "../src/noteList"

describe("#NoteList", () => {
  it("Displays empty list if no notes are inside", () => {
    let noteList = new NoteList()

    expect(noteList.noteArray).toStrictEqual([])
  })
})