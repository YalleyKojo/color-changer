
import './App.css';
import {useState} from 'react'
import Change from './Change';
import Card from './Card';
function App() {
  const [color, setColor] = useState('');
  const [hexcolor, setHexColor] = useState('');
  const [isdark, setIsDark] = useState(true);

  return (
    <div className="App">
      <Card
        color={color}
        hexcolor={hexcolor}
      isdark={isdark}/>
      <Change
        color={color}
        setColor={setColor}
        
        setHexColor={setHexColor}
        isdark={isdark}
        setIsDark={setIsDark}

      />
    </div>
  );
}

export default App;
