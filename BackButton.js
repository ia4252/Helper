
let myButton;
function setup() {
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
}

function draw() {
  if (
      mouseX < myButton.button.x + myButton.button.width &&
      mouseX > myButton.button.x &&
      mouseY > myButton.button.y &&
      mouseY < myButton.button.y + myButton.button.height
    ) {myButton.button.style("background-color", 200)}
  myButton.button.mousePressed(function back(){window.location.replace(myButton.u);
                               })
  
}
class Button1{
  constructor(x,y,w,h,t,u){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.u = u
    this.button = createButton(t)
    this.button.position(x,y)
    this.button.size(w,h) 
  this.button.style("background-color", 255);
    this.button.style("font-size", height / 26 + "px");  }
}
