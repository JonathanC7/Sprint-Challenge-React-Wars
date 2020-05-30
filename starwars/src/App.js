import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import { Row } from 'reactstrap'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([])
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      const characterData = response.data.results
      setData(characterData)
    })
    .catch((err) => {
      console.log('Error!', err)
    })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">
        <Row>
          {data.map((charData) => {
           return <Character key={charData.id} data={charData} />
          })}
        </Row>
      </h1>
    </div>
  );
}

export default App;
