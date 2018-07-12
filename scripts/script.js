const form = document.getElementById('addForm')
const itemList = document.querySelector('#items')
const filter = document.getElementById('filter')
const saveButton = document.querySelector('#saveButton')

const createListItemFromLocalStorage = () => {
    const itemListFromLS = JSON.parse(localStorage.getItem('array'))
    const countOfProperties = Object.keys(itemListFromLS).length
    const ul = document.querySelector('#items')
    for (let i = 0; i < countOfProperties; i++) {
        const li = document.createElement('li')
        li.classList = 'list-group-item'
        li.innerHTML = `${itemListFromLS[i]}  <button class="btn btn-danger btn-sm float-right delete">X</button>`
        ul.appendChild(li)
    }
    console.log(ul)
    return ul
}
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
}
const filterItems = (e) => {
    const text = e.target.value.toLowerCase()
    const items = itemList.getElementsByTagName('li')
    console.log(items)
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block'
        } else item.style.display = 'none'
    })
}
const createListElementJSON = () => {
    const items = itemList.getElementsByTagName('li')
    const obj = {}

    Array.from(items).forEach((el, i, arr) => {
        obj[i] = el.innerText.slice(0, el.innerText.length - 1)
    })
    return JSON.stringify(obj)
}
const saveItemList = (e) => {
    localStorage.clear()
    localStorage.setItem('array', createListElementJSON())
}
const displaySavedList = () => {

}

saveButton.addEventListener('click', saveItemList)
form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)
