import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay =  items.filter((item)=>{
  if (selectedCategory === "All" && searchText === "") return true;
  if(item.category === selectedCategory || selectedCategory==="All"){
      return(item.name.toLowerCase().match(searchText.toLowerCase()));}
  else{
    return false;}
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={setSearchText}
      search = {searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
