const container = document.querySelector('.grid-container')


function initialGrid(){
for (let i = 0; i < 16*16; i++){
    const div = document.createElement('div')
    div.classList.add('grid-item')
    div.style.width = `${600/16}px`;
    div.style.height = `${600/16}px`;
    div.addEventListener('mouseover', () => { 
        div.style.backgroundColor = 'black'
    });

    container.appendChild(div)
}

}


function resizeGrid(){
    let size = prompt('Enter a grid size between 1 and 100')
    if (size > 100 || size < 1){
        alert('Please enter a number between 1 and 100')
        return
    }   
    container.innerHTML = ''
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.style.width = `${600/size}px`;
        div.style.height = `${600/size}px`;
        div.addEventListener('mouseover', () => { 
            div.style.backgroundColor = 'black'
        });
    
        container.appendChild(div)
    }

}


function clearGrid(){
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white'
    })
}


function getRandomColour(){
    let letters = '0123456789ABCDEF'
    let colour = '#'
    for (let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random() * 16)]
    }
    return colour
}

function rainbowMode(){
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => { 
            item.style.backgroundColor = getRandomColour()
        });
    })
}

initialGrid()