import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let ReactP = [158, 550, 100]
  let ReactB = [
    { name: 'PhotoShop', Price: '$4'},
    { name: 'PhotoShop1', Price: '$44'},
    { name: 'PhotoShop2', Price: '$444'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <ul>{ReactB.map(ReactB=><li>{ReactB.name}</li>)}</ul>
        <Person price = "Free"></Person>
        <Person price = {ReactP[0]}></Person>
      </header>
    </div>
  );
}
 
function Users (){
 const [user, setUser] = useState([ ]);
  useEffect(()=>{
   fetch ('https://jsonplaceholder.typicode.com/users')
   .then (res => res.json())
   .then (data => setUser(data));
 }, [])
  return (
    <div>
      <h3>API Users Data: {user.length}</h3>
  <ul>{user.map(user=><li>{user.name}</li>)}</ul>
    </div>
  )
}

function Counter(){
  const [Count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(Count +1);
  };

  const handlerClear = ()=> {
    setCount(Count - 1);
    };
  return(
    <div>
      <h1>Counter:{Count} </h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handlerClear}>Clear</button>
    </div>
  )
}

function Person (props) {
const Div ={
  border: "1px solid white",
  borderRadius: "15px",
  margin: "5px"
}
 return ( 
  <div style={Div}>
    <img src={logo} className="App-logo" alt="logo" />
    <h3>I Love React</h3>
    <h2 style= {{backgroundColor: "#61DAFB"}}>Price: {props.price}</h2>
    <button>Purchase</button>
  </div>
  )
}

export default App;
