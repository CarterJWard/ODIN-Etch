const pageSetup = (size) => {
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