import './App.css';
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const [page, setPage] = useState(<Home/>)
  

  return (
    <div className="App">
        <nav>
            <img src='https://i.imgur.com/xxlw1er.png' alt="Jurassic Logo" id="logo"/>
            <ul id='navbar'>
                <li>Attractions</li>
                <li>Restaurants</li>
                <li>About Us</li>
                <li>Tickets/Pricing</li>
                <li>Travel</li>
                <li>Join Our Dino Club!</li>
            </ul>
        </nav>
        <div className='body'>
          {page}
        </div>
    </div>
  );
}

export default App;
