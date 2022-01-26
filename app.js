const body = document.querySelector('body');
const resetButton = document.querySelector('#reset')
const container = document.createElement('div')
container.style.cssText = 'height: 800px; width: 800px; display: block; line-height: 0'
body.style.margin = '0'
body.appendChild(container)

// const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']


function sketch(sideSize = 16) {
   const pxlSize = 800 / sideSize;
   for (let i = 0; i < sideSize; i++) {
      for (let j = 0; j < sideSize; j++) {
         let div = document.createElement('div')
         div.setAttribute('class', 'square')
         // div.setAttribute('id', `Row${ALPHA[i]}col${j}`)
         if (i % 2 !== 0 && j % 2 !== 0) {
            div.style.cssText = `height: ${pxlSize}px; width: ${pxlSize}px; background-color: lightgray; display: inline-block`;
         } else if (i % 2 !== 0 && j % 2 === 0) {
            div.style.cssText = `height: ${pxlSize}px; width: ${pxlSize}px; background-color: gray; display: inline-block`;
         } else if (i % 2 === 0 && j % 2 !== 0) {
            div.style.cssText = `height: ${pxlSize}px; width: ${pxlSize}px; background-color: gray; display: inline-block`;
         } else {
            div.style.cssText = `height: ${pxlSize}px; width: ${pxlSize}px; background-color: lightgray; display: inline-block`;
         }
         container.appendChild(div)
      }
   }
   eventLstn()
};

sketch();


resetButton.addEventListener(('click'), (e) => {
   const sideSize = prompt('How many squares per side?');
   if (sideSize <= 100) {
      container.innerHTML = '';
      sketch(sideSize);
   } else {
      alert('Must be 100 or less');
   }
})

function randomColor() {
   const R = Math.floor(Math.random() * 257);
   const G = Math.floor(Math.random() * 257);
   const B = Math.floor(Math.random() * 257);
   this.style.backgroundColor = `rgb(${R},${G},${B})`;

}

/* function randomColor(e) {
   const H = Math.floor(Math.random() * 361);
   const S = Math.floor(Math.random() * 101);
   const L = 50
   this.style.backgroundColor = `hsl(${H},${S}%,${L}%)`;
} */


function eventLstn() {
   const squares = document.querySelectorAll('.square')
   squares.forEach((square) => {
      square.addEventListener('mouseover', randomColor)
   })
}

eventLstn();