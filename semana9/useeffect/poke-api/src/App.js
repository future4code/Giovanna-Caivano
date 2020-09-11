import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from './constants/constants'
import { PokeCard } from './components/PokeCard'
import './styles.css'

function App() {
  const [ pokeList, setPokeList ] = useState([]);
  const [ pokeName, setPokeName ] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}?limit=151`)
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const changePokeName = e => {
    setPokeName(e.target.value)
  }

  return (
    <div className="App">
      <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
