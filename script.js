const containerEl = document.querySelector(".container");
let colorContainerEl;

const copyToClipboard = (event) => {
    console.log('clipboard call');
    const clickedDiv = event.target;
    const copyText = clickedDiv.textContent;
    console.log(copyText);
    let inputEl = document.createElement('input');
    inputEl.setAttribute('value', copyText);
    document.body.appendChild(inputEl);
    console.log(inputEl);
    inputEl.select();
    document.execCommand('copy');
    inputEl.parentElement.removeChild(inputEl);
    const popUp = document.createElement('p');
    popUp.innerText = 'Copied';
    popUp.classList.add('popUp');
    clickedDiv.appendChild(popUp);
    console.log(popUp);

   setTimeout(() => {
    popUp.style.display = 'none';
   }, 2000);
      
}

for(let i=0; i<30; i++){
    colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    const color = selectedColor();
    const textNode = document.createTextNode(`${color}`);
    colorContainerEl.appendChild(textNode);
    colorContainerEl.style.backgroundColor = `${color}`;
    colorContainerEl.style.cursor = 'pointer';

    colorContainerEl.addEventListener('click', copyToClipboard);
}


function selectedColor() {
    const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let setColor = ['#'];
    for(var i=1; i<=6; i++) {
       let pick = Math.floor(Math.random()* color.length);
      setColor.push(color[pick]);
    }
   return setColor.toString().replaceAll(',','');
    
}

