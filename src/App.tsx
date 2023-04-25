import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NumberInputForm } from './components/NumberInputForm'
import { NumberDisplay } from './components/NumberDisplay'
import { serie } from './modules/utils'

const App:React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);



  const handleSubmit = (newNumber: number) => {
    const serieNumber=  serie(newNumber)
    setNumber(serieNumber);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Singular test Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <NumberInputForm onSubmit={handleSubmit}/>
        <NumberDisplay number={number}/>

      </div>
      <p className="read-the-docs">
        Create by Shirley Startary
      </p>
    </div>
  )
}

export default App
