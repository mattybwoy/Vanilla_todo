let noteList = new NoteList();


let btn = document.getElementById("createNote");
btn.addEventListener("click", add);

window.addEventListener("hashchange", displayFull);

function add() {
  if (document.getElementById("user_input").value == '') {
    window.alert("Note cannot be empty")
  } else {
    noteList.add(document.getElementById("user_input").value);
    document.getElementById("user_input").value = "";
    displayNote();
  }
}

  function displayNote() {
    let notesList = document.getElementById("notesList");
    let li = document.createElement("a");
    let br = document.createElement("br");
    li.setAttribute('id',(noteList.noteArray.length -1));
    li.setAttribute('href',('#'+(noteList.noteArray.length -1)));
    li.appendChild(document.createTextNode(noteList.sliceArray[noteList.sliceArray.length -1]));
    notesList.appendChild(li);
    notesList.appendChild(br);
  }

  function displayFull() {
    document.getElementById("displayNote").innerHTML = noteList.noteArray[location.hash.substr(1)]
  }

  function setbg(color) {
    document.getElementById("user_input").style.background = color
  }