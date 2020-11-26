import React, { useState } from "react";
import ListItem from './ListItem';
import "./../styles/App.css";
function App() 
{
	const [items,setItems]=useState([]);
	const [newItem,setNewItem]=useState("");
	const addItem=(evt)=>
	{
		items.push(newItem);
		setItems([...items]);
		setNewItem("");
	}
	const newItemChanged=(evt)=>
	{
		setNewItem(evt.target.value);
	}
	const deleteHandler=(itemIdx)=>
	{
		items.splice(itemIdx,1);
		setItems([...items]);
	}
	const editHandler=(editedItem,itemIdx)=>
	{
		items[itemIdx]=editedItem;
		setItems([...items]);
	}
	return (
	<div id="main">
		<textarea id="task" placeholder="new item" onChange={newItemChanged} value={newItem}></textarea>
		<button id="btn" onClick={addItem} disabled={newItem.trim().length===0}>Add Item</button>
		{items.map((item,idx)=>(
			<ListItem item={item} key={`${item}_${idx}`} idx={idx} editHandler={editHandler} deleteHandler={deleteHandler}/>
		))}
	</div>
	);
}


export default App;
