import { useState } from "react";
export default function App() {
  const [initialItems, setInitialItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
  ]);

  function HandleAddItem(inputItem) {
    console.log(inputItem);
    setInitialItems((prevItems) => [...prevItems, inputItem]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form HandleAddItem={HandleAddItem} initialItems={initialItems}></Form>
      <PackingList initialItems={initialItems}></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>:palm_tree: Far Away :handbag:</h1>;
}
function Form({ HandleAddItem, initialItems }) {
  const [inputItem, setInputItem] = useState({
    id: initialItems.length + 1,
    description: "",
    quantity: 1,
    packed: false,
  });

  function HandleInputChange(e) {
    console.log(inputItem);
    setInputItem((prev) => ({ ...prev, description: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    HandleAddItem(inputItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your :heart_eyes: trip? </h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={HandleInputChange}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ initialItems }) {
  console.log(initialItems);
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span
        style={{ textDecoration: `${item.packed ? "line-through" : "none"}` }}
      >
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        :handbag:You have X items on your list, and you already packed X (X% of
        total)
      </em>
    </footer>
  );
}
