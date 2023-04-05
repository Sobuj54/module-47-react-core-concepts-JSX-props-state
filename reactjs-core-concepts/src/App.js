import logo from "./logo.svg";
import "./App.css";

// const singers = [
//   { name: "dr. mahfuz", prof: "singer" },
//   { name: "eva rahman", prof: "singer" },
//   { name: "siam", prof: "actor" },
//   { name: "araf", prof: "none" },
// ];

function App() {
  const persons = ["salman shah", "manna", "jasim", "bappa", "sakib"];
  return (
    <div className="App">
      {persons.map((p) => (
        <li>{p}</li>
      ))}
      {/* creating a dynamic component from array */}
      {/* {persons.map((p) => (
        <Person name={p}></Person>
      ))} */}

      {/* creating dynamic component form array of objects */}

      {singers.map((singer) => (
        <Person name={singer.name} prof={singer.prof}></Person>
      ))}

      {/* creating a static component */}
      {/* <Person name="sakib al hasan" prof="criketer"></Person>
      <Person name="maruf" prof="student"></Person>
      <Person name="manna" prof="nayok"></Person> */}
      <h1>Creating a new tag</h1>
      <Friend name="rayhan" prof="student and  teacher"></Friend>
      <Friend name="maruf" prof="student and developer"></Friend>
      <Friend name="ashik" prof="student"></Friend>
    </div>
  );
}

function Person(props) {
  //console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h3> {props.prof}</h3>
    </div>
  );
}

function Friend(props) {
  //console.log(props);
  return (
    <div className="container">
      <h1>Friend: {props.name}</h1>
      <h4>profession: {props.prof}</h4>
    </div>
  );
}

export default App;
