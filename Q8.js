const AdditemList = document.getElementById('enteritem');
const AddButton = document.getElementById('addBtn');
const ShoppingList = document.getElementById('shoppingList');

//function to add new Item
function AddItem() {
    const itemText = AdditemList.value.trim();
    if (itemText === "") return;

    //create list item
    const li = document.createElement('li');
    li.textContent = itemText + " ";

    //Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => ShoppingList.removeChild(li);

    //Append delete button to list item
    li.appendChild(deleteBtn);
    ShoppingList.appendChild(li);

    //Clear and focus input
    AdditemList.value = " ";
    AdditemList.focus();
}

//Add item on button click
AddButton.addEventListener('click', AddItem);

//Add item on enter key press
AdditemList.addEventListener('keypress',(e) =>{
    if (e.key === 'Enter') AddItem();
});