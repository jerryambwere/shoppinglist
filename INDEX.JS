document.addEventListener('DOMContentLoaded', function() {
  const itemInput = document.getElementById('itemInput');
  const addItemBtn = document.getElementById('addItemBtn');
  const markPurchasedBtn = document.getElementById('markPurchasedBtn');
  const clearListBtn = document.getElementById('clearListBtn');
  const itemList = document.getElementById('itemList');

  let shoppingList = []; 

  function addItemToList(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    itemList.appendChild(li);
  }

  
  addItemBtn.addEventListener('click', function() {
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
      shoppingList.push(newItem); 
      addItemToList(newItem); 
      itemInput.value = ''; 
    }
  });

  markPurchasedBtn.addEventListener('click', function() {
    const lis = itemList.getElementsByTagName('li');
    for (let li of lis) {
      if (!li.classList.contains('purchased') && !li.classList.contains('hidden')) {
        li.classList.add('purchased');
      }
    }
  });

  
  clearListBtn.addEventListener('click', function() {
    shoppingList = []; 
    itemList.innerHTML = ''; 
  });


  itemList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('purchased');
    }
  });
});