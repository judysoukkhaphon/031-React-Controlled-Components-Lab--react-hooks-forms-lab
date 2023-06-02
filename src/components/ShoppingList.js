import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // setSelectedCategory -> Filter
  // selectedCategory -> Item

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  } //Filter

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory; 
  }); //Item

  const [itemarray, setArray] = useState(items);

  function addElement(itemObject){
    setArray(itemarray.push(itemObject));
    console.log(itemObject.name);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {addElement}/>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
