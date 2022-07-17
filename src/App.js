import './App.css';
import SearchBox from './components/searchBox/searchBox';
import Card from './components/card/card';
import { useEffect, useState } from 'react';

function App() {

  const [searchField, setSearchField] = useState("")
  const [monsters, setMonster] = useState([])
  const [filterMonsters, setfilterMonsters] = useState(monsters)
  const onChangeHandler = (e) => {
    setSearchField(e.target.value.toLowerCase())
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonster(users));
  }, [])

  useEffect(() => {
    const newMonstersList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setfilterMonsters(newMonstersList)
  }, [monsters, searchField])

  return (
    <div className="App">
      <SearchBox onChangeHandler={onChangeHandler} />
      <Card monsters={filterMonsters}/>
    </div>
  );
}

export default App;
