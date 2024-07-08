document.addEventListener('DOMContentLoaded'()={
    const i=document.getElementById('input')
})


const input= document.getElementById('input')
   const addBtn=document.getElementById('addBtn')
   const  clearBtn= document.getElementById('clearBtn')
   const purchaseBtn=document.getElementById('purchaseBtn')
 
   const shoppingList= document.getElementById('shoppingList')

  let items=JSON.parse(localStorage.getItem('shoppingListItems'))
||  []

const updateLocalStorage=function () {
    localStorage.setItem('shoppingListItems',
JSON.stringify(items)
    )
}

const renderItems= function () {
    shoppingList.innerHTML=''
    items.forEach(item,index) => {
const listItem= document.createElement('li')
const textNode=document.createElement('span')
textNode.textContent=item.name
    }

    listItem.appendChild(textNode)

    listItem.classList.toggle('purchased',item.purchased)

    const editBtn=document.createElement('button')

    editBtn.textContent=EdIT

    editBtn.addEventListener('click',(e)=>{
        e.stopPropagation()
        const newItem=prompt('edit item',item.name)
        if (newItem) {
            items[index].name= newItem;
            updateLocalStorage()
            renderList()
        }
    })

const markBtn= document.createElement('button')
markBtn.addEventListener('click',(e)=> {
    e.stopPropagation()
    items[index].purchased = !items[index].purchased
    updateLocalStorage()
    renderList()}
)

listItem.appendChild(editBtn)
listItem.appendChild(markBtn)
listItem.appendChild(listItem)
}

addBtn.addEventListener('click',()=>{
    const newIt=itemInput.value.trim()
    if(newIt){
        items.push({name:
            newIt,purchased:false 
        })
        itemInput.value=''
        updateLocalStorage()
        renderItems()
    }
})





