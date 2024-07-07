let list=[]

   const input= document.getElementById('input')
   const add=document.getElementById('addBtn')
   const  clearButton= document.getElementById('clearBtn')
   const purchase=document.getElementById('purchaseBtn')

   const storeItems= document.getElementById('shoppingList')

add.addEventListener('click',adds)
clearButton.addEventListener('click',clears)

function appendList(){
   const item=input.value()
   if(item !==''){
      list.push({text:item, purchased: false})
      input.value('')
   }
}

function markPurchased(text,purchased){
   const marked= document.createElement('li')
   marked.textContent=text
   if (purchased) {
      marked.className='purchased'

   }
   storeItems.appendChild(marked)
}
   
function clear(){
   list=[]
   storeItems.innerHTML=""
}


