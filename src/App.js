import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  // useEffect( ()=>{}, [])
  useEffect( ()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, []);
  return (
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;



// const increaseCount = () =>{
//   const newCount = count + 1;
//   setCount(newCount);


/*
const products = [
  {name: 'laptopoo', price: 153000},
  {name: 'phone', price: 93500},
  {name: 'watch', price: 33000},
  {name: 'tablet', price: 50000},
]

*/

   /* {/* {
      products.map(product => <Product name={product.name} price={product.price}></Product>)
    }
    {/* <Person name="laptop" price="15000"></Person>    
    <Person name="watch" price="36000"></Person>     */

// function Product(props) {
//   console.log(props);
//   return (
//     <div className='product'>
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }