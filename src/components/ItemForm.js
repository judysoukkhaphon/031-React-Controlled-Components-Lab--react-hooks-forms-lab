// Make all input fields controlled inputs. Meaning, parent should handle state.
// This should send data back to ShoppingList which then sends it to App which will add it to items.js (DB)
// handle submit event and use data saved in state.

import React from "react";
import { v4 as uuid } from "uuid";

// accepts props from ShoppingList
function ItemForm(props) {

function createNewItem(event){
  event.preventDefault();
  const newItem = {
    id: uuid(), 
    name: event.target[0].value,
    category: event.target[1].value,
  };
  console.log(newItem);
  props.onItemFormSubmit(newItem);
  return newItem;}




  return (
    <form className="NewItem" onSubmit={createNewItem}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
