


dragElement(document.getElementById("drag"));

function dragElement(element){
  var pos1 = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;

  if(document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  }else {

    element.onmousedown = dragMouseDown;
  }




function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4  e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;

}

function elementDrag(e){
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  element.style.top = (element.offsetTop - pos2) + "px";
  element.style.left = (element.offetLeft - pos1) + "px";
}

function closeDragElement(){

  document.onmouseup = null;
  document.onmousemove = null;
}


}

