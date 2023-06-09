import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import App from "./App";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // setSelectedCategory -> Filter
  // selectedCategory -> Item
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  } //Filter

  function handleTextChange(event) {
    event.preventDefault();
    setSearchText((x)=>{x = event.target.value.toLowerCase(); return x});
    
    console.log(searchText);
  }

  const [array, setArray] = useState(items);


 const itemsToDisplay =  array.filter((item)=>{
  if (selectedCategory === "All" && searchText === "") return true;
  if(item.category === selectedCategory || selectedCategory==="All"){
      return(item.name.toLowerCase().match(searchText));
    };
    })
  


  
// Add New Item functions
const [itemName, setItemName] = useState("");

const [itemCategory, setItemCategory] = useState("Produce");
 function addElement(item, event){
    event.preventDefault();
    setArray([...array, item]);
  }
  function onSelectChange(event){
    event.preventDefault();
    setItemCategory((x)=>{x = event.target.value; return x});
  }
  function onInputChange(event){
    event.preventDefault();
    setItemName((x)=>{x = event.target.value; return x});
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {addElement}
      onCategoryChange = {onSelectChange}
      onTextChange = {onInputChange} 
      name = {itemName}
      category = {itemCategory}
      />
      <Filter onCategoryChange={handleCategoryChange} 
      onSearchChange={handleTextChange}
      search = {searchText}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
