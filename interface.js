//import { NoteList } from "./src/noteList";

let noteList = new NoteList();


let btn = document.getElementById("createNote");
btn.addEventListener("click", add);

function add() {
    noteList.add(document.getElementById("user_input").value);
    document.getElementById("user_input").value = "";
    displayNote();
  }

  function displayNote() {
    var notesList = document.getElementById("notesList");
    var li = document.createElement("a");
    var br = document.createElement("br");
    li.setAttribute('id',(noteList.noteArray.length -1));
    li.setAttribute('class', 'noteyList');
    li.setAttribute('href',('#'+(noteList.sliceArray.length -1)));
    li.appendChild(document.createTextNode(noteList.sliceArray[noteList.sliceArray.length -1]));
    notesList.appendChild(li);
    notesList.appendChild(br);
  }