let ogSize = 16

for (let i=0; i<ogSize**2; i++) {
    const block = document.createElement('div')
    document.querySelector('section').appendChild(block)
}

document.querySelector('button').addEventListener('click', grid)
Array.from(document.querySelectorAll('div')).forEach(element => element.addEventListener('mousedown', color))

function color(click) {
    
    Array.from(document.querySelectorAll('div')).forEach(element => element.addEventListener('mouseover', color))
    click.target.style.background = 'black'

}

function grid() {
    let size = Number(prompt(`choose a grid size from 1 to 100`))
    while (isNaN(size) === true || size > 100 || size < 1) {
        size = Number(prompt(`choose a grid size from 1 to 100`))
    }
    for (let i=0; i<ogSize**2; i++) {
        document.querySelector('section').removeChild(document.querySelector('div'))
    }
    ogSize = size
    for (let i=0; i<size**2; i++) {
        const block = document.createElement('div')
        document.querySelector('section').appendChild(block)
    }
    Array.from(document.querySelectorAll('div')).forEach(element => {
        element.style.width = `${960/size}px`;
        element.style.height = `${960/size}px`;})
    Array.from(document.querySelectorAll('div')).forEach(element => element.addEventListener('mousedown', color))
}
