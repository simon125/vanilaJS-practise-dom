const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')


//FOMR SUBMIT EVENT
const addItem = (e) => {
    e.preventDefault()
    const newItem = document.getElementById('item').value
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.innerText = 'X'
    li.appendChild(deleteBtn)
    if (newItem) {
        itemList.appendChild(li)
    }

    document.getElementById('item').value = ''
}
const removeItem = (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure about this?')) {
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
    console.log(1)
}

const filterItems = (e) => {
    const text = e.target.value.toLowerCase()
    const items = itemList.getElementsByTagName('li')
    console.log(items)
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block'
        }else item.style.display = 'none'
    })
}

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)
