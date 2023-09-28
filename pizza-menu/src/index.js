import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //check how to give style to JSX components, you got to do it using double brackets
  // the font size property usually with css you call it font-size, but React adopted camelCase instead, so it needs to be fontSize, it happens with all other properties aswell.

  //you can save the styles on a variable, not only do them inline:  <h1 style={{ color: "red", fontSize: "48", textTransform: "uppercase" }}>
  // however this is not used in real world, usually you import css files.
  const style = {};
  return (
    //const style = { color: "red", fontSize: "48", textTransform: "uppercase" };
    //return (
    //<h1 style={style} className="header">
    //Fast React Pizza Co.
    //</h1>
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/*ternary operator rendering*/}

      {numPizzas > 0 ? (
        //React fragment is used to add more properties like keys(used when displaying lists) we can use react.fragment without the text like <></>
        //React Fragment is used to return more than 1 element, otherwise we need to wrap everything on a div or something to return 1 element
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. ALl
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> //Here we see how we can use nested function components that will be rendered inside the parent component HTML
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
      {/*  <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;
  return (
    //line 128 exemplifies how you can use template literals from vanilla JavaScript to dinamically change className text based on the ternary operator
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/** lines 134 and 136 result in same object returned, but one is setting the span object (class) based on sold out,
       *  while the other is setting the text property: 
  {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}*/}

      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're closed");

  //Authentic Italian cuisine. 6 creative dishes to choose from. ALl from our stone oven, all organic, all delicious.

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {closeHour}:00 and {openHour}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
