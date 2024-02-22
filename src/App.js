import { useEffect, useState } from 'react';
import './App.css';
import Stopper from './components/Stopper/Stopper.js';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(setTimer);
    };
  }, [timer])

 

  const methods = {
    startTimer: () => {
      if (!timer) {
        setTimer(
          setInterval(() => {
            setTime(time => time + 10)
          }, 10))
      }
    },
    stopTimer: () => {
      setTimer(null);
      clearInterval(timer);
    },
    resetTimer: () => {
      setTime(0)
      setTimer(null);
      clearInterval(timer);
    },
  }

  return (
    <div className="App">
      <Stopper {...methods} time={time} />
    </div>
  );
}

export default App;
