// Make all input fields controlled inputs. Meaning all form data must be stored in state.
// This should send data back to ShoppingList which then sends it to App which will add it to items.js (DB)
// handle submit event and use data saved in state.

import React from "react";
import { v4 as uuid } from "uuid";

// accepts props from ShoppingList
function ItemForm(props) {

const newItem = {
  id: uuid(),
  name: props.name,
  category: props.category
}


  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit.bind(this, newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange = {props.onTextChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={this} onChange = {props.onCategoryChange}>
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
