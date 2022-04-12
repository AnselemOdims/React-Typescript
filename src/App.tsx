import {useState} from 'react';
import './App.css';
import PeopleList from './components/PeopleList';

export interface PeopleState{
  people: {
    name: string
  age: number
  imageUrl: string
  note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<PeopleState['people']>([]);

  return (
    <div className="App">
      <p>People invited to my party</p>
      <PeopleList people={people} />
    </div>
  );
}

export default App;
