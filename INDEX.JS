dfunction createElement(element) {
    return document.createElement(element);
  }
  
  function addText(element, text) {
    return (element.innerText = text);
  }
  
  
  function appendChild(child, parent) {
    return parent.appendChild(child);
  }
  
  
  function select(selector) {
    return document.querySelector(selector);
  }
  
  function listen(element, event, callback) {
    return element.addEventListener(event, callback);
  }
  
  function addAttribute(element, attribute, content) {
    return element.setAttribute(attribute, content);
  }
  
  const shoppingList = ["milk", "tea"];
  
  const ol = select("ol");
  
  listen(document, "DOMContentLoaded", displayItems);
  function displayItems() {
    ol.innerHTML= ''
    shoppingList.forEach(createAListItem);
  }
  function createAListItem(item) {
  const li= createElement('li')  
  addText(li,item)  
  appendChild(li,ol)
  }

  const form= select('select')
  listen(form,'submit',addItem)

  function addItem(event) {
    event.preventDefault()
    console.log('From the form');
shoppingList.push(event.target[0].value)


displayItems()
console.log(shoppingList)
event.target.reset('delete')
  }

  const deleleteButton= select('delete')
  listen(deleleteButton, 'click', clearList)
  console.log('this is before we click');

  function clearList() {
    shoppingList.length=0
    console.log
  }

  

