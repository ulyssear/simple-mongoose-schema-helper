import render from 'just-render'

document.addEventListener(event => {

    const my_element = render`<h1>Ceci est un titre</h1>`
    document.appendChild(my_element)

})
