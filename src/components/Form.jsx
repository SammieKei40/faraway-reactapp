import { useState } from 'react';

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return alert("Input field empty");

    const newItems = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your 😁 trip?</h3>
        <select value={quantity} onChange={(e) => { setQuantity(e.target.value); }}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <input type="text" placeholder='Item...' value={description}
          onChange={(e) => { setDescription(e.target.value); }} />
        <button>Add</button>
      </form>
    </>
  );
}
