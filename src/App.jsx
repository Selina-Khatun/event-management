// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <h1>Vite + React</h1>
     
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Google from './Google';
import Navbar from '../../components/Navbar/Navbar';
import Login from './Login'; // Assuming you have a Login component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            {/* Add more routes as needed */}
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;


