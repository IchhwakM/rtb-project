//img-1

let para = document.getElementsByTagName("p");
const element = para[0];
const div = document.createElement("div");
div.innerHTML = `<center><div class="container" style="display: flex; align-items: flex-start; justify-content: center;">
<img src="https://picsum.photos/id/100/600/200" alt="pic" id="picture" />
<button id="closebtn" class="btn" style="border-radius: 50px;
background: none;
background-color: none;
border: none;
font-weight: bolder;
z-index: 1;">
x
</button>
</div></center>`;
element.appendChild(div);
closebtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  div.style.display = "none";
}

//img-2

const div2 = document.createElement("div");
const element2 = para[3];
div2.innerHTML = `<center><div class="container" style="display: flex; align-items: flex-start; justify-content: center; ">
<img src="https://picsum.photos/id/100/600/200" alt="pic" id="picture" />
<button id="closebtn2" class="btn" style="border-radius: 50px;
background: none;
background-color: none;
border: none;
font-weight: bolder;
z-index: 1;">
x
</button>
</div></center>`;
element2.appendChild(div2);
closebtn2.addEventListener("click", buttonClickHandler2);

function buttonClickHandler2() {
  div2.style.display = "none";
}

// Widget

const widget = document.createElement("div");

widget.innerHTML = `<div style="position: fixed;
top: 450px;
left: 20px;
max-width: 150px; max-height: 150px;">
<button id="closebtn3" class="btn" style=" background: none;
border: none;
font-weight: bolder;
z-index: 1;">x</button>
<center><iframe src="ajax.html" frameborder="0" allowtransparency="yes" ></iframe></center>
</div>`;

document.body.appendChild(widget);

closebtn3.addEventListener("click", buttonClickHandler3);

function buttonClickHandler3() {
  widget.style.display = "none";
}
