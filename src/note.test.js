import Note from "../src/note"

describe ('#Note', () => {
  it("Allows one note to be saved", () => {
    let note = new Note("Buy the milk")
    expect(note.todo).toBe("Buy the milk")
  })

  it("Allows note to have an id", () => {
    let note = new Note("Purchase a tote", 1)
    expect(note.id).toBe(1)
  })
})
