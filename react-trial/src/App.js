import React, { useState } from 'react'; 

function App() {
   const [count,setCount] = useState(0);

   // console.log(state);

    function addToCart() {
       setCount(count + 1)
    }
    function removeFromCart() {
        setCount(count - 1)
     }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addToCart} >AddToCart</button>
            <button onClick={removeFromCart} >removeFromCart</button>
        </div>
       
    );

}
export default App;


















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
