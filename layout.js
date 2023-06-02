import items from "./items";

let item={
    id:"",
    itemName:"",
    category:"",
};

let category = item.category;






function app(){
    const allItems = items.items;
    let theme;
    function setTheme(){return true};
    header(theme);
    shoppingList(allItems);
}

function shoppingList(items){
    let itemList = items;
    let category = itemList.category;
    const filteredItems = itemList.filter((item) => {return true;})
    function setCategory(){return category}
    function onItemFormSubmit(event){
        const newItem = {
            id: uuid(), 
            name: event.target.name,
            category: event.target.value,
          };

          items.push(newItem); // rewrite with spread;
    }
    itemForm(onItemFormSubmit);
    filter(setCategory);
    item(filteredItems.id, filteredItems.name, filteredItems.category);
}

function item(){
    let isInCart;
}

function itemForm(someFunction){
    const OnItemFormSubmit = someFunction;
}



function filter(){

}

function header(){

}