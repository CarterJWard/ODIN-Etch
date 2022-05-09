const pageSetup = (size) => {
    let page = (Math.min(window.innerHeight, window.innerWidth)) - 80
    console.log(page)
    document.querySelector('#grid').innerHTML = ""
    for (width = 0; width < size; width++) {
        let parent = document.createElement('div')
        parent.classList.add('parent')
        parent.classList.add(width)
        document.querySelector('#grid').appendChild(parent)

        for (height = 0; height < size; height++) {
            let holder = document.createElement("div")
            holder.id = height + " " + width
            holder.classList.add('box')
            holder.classList.add('child')
            holder.style.width = (page / size) + "px"
            holder.style.height = (page / size) + "px"
            holder.onmouseover = () => {
                holder.style.backgroundColor = 'black'
            }
            parent.appendChild(holder)
        }
    }
}

const btn = document.querySelector('#create')
btn.onclick = () => {
    let size = prompt('How many grids would you like the new grid to be')
    pageSetup(size)
}

window.onload = () => {
    pageSetup(16)
}