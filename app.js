


const body = document.querySelector('body');
console.log(body)
const container = document.createElement('div')
container.style.cssText = 'height: 800px; max-width: 800px; display: flex; flex-wrap: wrap'
body.appendChild(container)

const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
      let div = document.createElement('div')
      div.setAttribute('id', `Row${ALPHA[i]}col${j}`)
      /* if (i % 2 !== 0 && j % 2 !== 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: black; display: inline-block';
      } else if (i % 2 !== 0 && j % 2 === 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: green; display: inline-block';
      } else if (i % 2 === 0 && j % 2 !== 0) {
         div.style.cssText = 'height: 50px; width: 50px; background-color: green; display: inline-block';
      } else {
         div.style.cssText = 'height: 50px; width: 50px; background-color: black; display: inline-block';
      } */
      container.appendChild(div)

   }
} 