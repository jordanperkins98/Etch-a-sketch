const container = document.querySelector('.grid-container')



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

