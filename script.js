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
