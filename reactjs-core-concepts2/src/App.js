import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const products = [
    { name: "laptop", price: 52000 },
    { name: "phone", price: 50000 },
    { name: "tablet", price: 20000 },
    { name: "watch", price: 2000 },
  ];

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>external users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Derease count</button>
    </div>
  );
}

{
  /* creating dynamic component */
}
{
  /* {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))} */
}

{
  /* <Product name="laptop" price="30000"></Product>
      <Product name="phone" price="10000"></Product>
      <Product name="watch" price="1000"></Product> */
}

function Product(props) {
  return (
    <div className="product">
      <h1>product: {props.name}</h1>
      <h2>price: {props.price}</h2>
    </div>
  );
}

export default App;
