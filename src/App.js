import{ useState } from "react"; 
function App() {
const a = 5;
let message;

const [count, setCount] = useState(0);
const students = ["Anne", "Bob", "Charlie"];
const [task, setTask] = useState([]); //store task
const [input, setInput] = useState(""); // store input value
const addTask = () => {
  if(input.trim()==="") return; // prevent adding empty task
  setTask([...task, input]); // add new task to the list
  setInput(""); // clear input field
}
const isLoggedIn = true;
 if(isLoggedIn)
  
  {
    message = "Welcome Back!"
  }
  else
  {
    message = "Please Log in."
  }

  return (
    <>
    <h1>Hello, React!</h1>
    <p>a is equal to {a}</p>
  <p>{message}</p>


  <h2>{a > 5 ? "Welcome" : "Please Login."}</h2>

  <p>Count: {count}</p>
  <button onClick = {() => setCount(count +1)}> Increase</button>
  <button onClick = {() => setCount(count -1)}> Decrease</button>
  <button onClick = {() => setCount(0)}> Reset</button>

  <ul>{students.map((students, index) => (
    <li key={index}> {students}</li>
  ))}</ul>
  
    </>
  );
}

export default App;
