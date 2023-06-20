import { useState } from 'react';

export function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)
  );
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)
  );

  return (
    <>
      <div className='list'>
        <ul>
          {sortedItems.map((item) => <Item items={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />)}
        </ul>

        <div className='actions'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    </>
  );
}

function Item({ items, onDeleteItems, onToggleItems }) {
  return <>
    <li>
      <input type="checkbox" value={items.packed} onChange={() => onToggleItems(items.id)} />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  </>;
}
