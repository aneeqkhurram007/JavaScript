console.log("This is App.js");
showNotes();
let buttonT = document.createElement("button");
buttonT.innerHTML = `<span style="color='blue';" class="btn btn-success" onclick="myfunc()">New Button</span>`;
document.body.appendChild(buttonT);
function myfunc() {
    let doc=document.body.innerHTML;

    document.body.innerHTML=buttonT;
    window.print();

window.location.assign("https://www.youtube.com");

}


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>

        `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! use "Add a note" section to use.`
    }
}
// function to delete a note
function deleteNote(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();
    console.log("Input event fired", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (params) {
        let cardTxt = params.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            params.style.display = "block";
        } else {
            params.style.display = "none";
        }
    })
})
