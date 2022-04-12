import {useState} from 'react';
import './App.css';

interface PeopleState{
  name: string
  age: number
  imageUrl: string
  note: string
}

function App() {
  const [people, setPeople] = useState<PeopleState | null>(null);

  return (
    <div className="App">
      <p>People invited to my party</p>
    </div>
  );
}

export default App;
