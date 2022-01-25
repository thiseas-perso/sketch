


const body = document.querySelector('body');

const container = document.createElement('div')
container.style.cssText = 'height: 800px; width: 800px; display: block; line-height: 0'
body.style.margin = '0'
body.appendChild(container)

const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
      let div = document.createElement('div')
      div.setAttribute('class', 'square')
      div.setAttribute('id', `Row${ALPHA[i]}col${j}`)
      if (i % 2 !== 0 && j % 2 !== 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: gray; display: inline-block';
      } else if (i % 2 !== 0 && j % 2 === 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: darkgray; display: inline-block';
      } else if (i % 2 === 0 && j % 2 !== 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: darkgray; display: inline-block';
      } else {
         div.style.cssText = 'height: 50px; width: 50px; background-color: gray; display: inline-block';
      }
      container.appendChild(div)

   }
}

function randomColor(e) {
   const R = Math.floor(Math.random() * 257);
   const G = Math.floor(Math.random() * 257);
   const B = Math.floor(Math.random() * 257);
   this.style.backgroundColor = `rgb(${R},${G},${B})`;

}


const squares = document.querySelectorAll('.square')


squares.forEach((square) => {
   square.addEventListener('mouseover', randomColor)
})