import { useEffect, useState } from 'react';
import './App.css';
import Stopper from './components/Stopper/Stopper.js';
 
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
 
  useEffect(() => {
    if (!isRunning) return;
 
    const intervalId = setInterval(() => {
      setTime(time => time + 10)
    }, 10)
 
    return () => {
      clearInterval(intervalId);
    }
  }, [isRunning]);
 
  const methods = {
    startTimer: () => {
      setIsRunning(true);
    },
 
    stopTimer: () => {
      setIsRunning(false);
    },
 
    resetTimer: () => {
      setIsRunning(false);
      setTime(0)
    },
  }
 
  return (
    <div className="App">
      <Stopper {...methods} time={time} />
    </div>
  );
}
 
export default App;
 