'use strict';
/*  DOM
    CRUD
C-reate
R-ead
U-pdate
D-elete
    - Manipulacion del DOM
    - Eventos
*/
const $root = window.document.getElementById('root');
const $p = document.createElement('p')

 $root.appendChild($p)

 $p.textContent = 'Hola'

 $p.innerHTML = `<span>Hola,</span><strong>DEVS</strong>!`;

 $root.appendChild($p);

 $p.remove ()

$root.innerHTML = `<button>Click Me</button>`

const $button = document.querySelector('button')

$button.addEventListener('click', ()=>{
    console.log('el usuario le dio click al boton');
})

$button.remove()

