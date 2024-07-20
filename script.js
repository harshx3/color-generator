const containerEl = document.querySelector(".container");

for(let i=0; i<30; i++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    const color = selectedColor();
    const textNode = document.createTextNode(`${color}`);
    colorContainerEl.appendChild(textNode);
    colorContainerEl.style.backgroundColor = `${color}`

}


function selectedColor() {
    const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let setColor = ['#'];
    let pickedColor;
    for(var i=1; i<=6; i++) {
       let pick = Math.floor(Math.random()* color.length);
      setColor.push(color[pick]);
      console.log(setColor.toString().replaceAll(',',''));
    }
   
    
}