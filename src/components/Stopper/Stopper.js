import Timer from '../Timer/Timer.js'
import Button from '../Button/Button.js'
import styles from './Stopper.module.scss'

const Stopper = ({ startTimer, stopTimer, resetTimer, time }) => {


    return (
        <div className={styles.container}>
            <div className={styles.timer}>
                <Timer time={time}/>
            </div>
            <div className={styles.buttons}>
                <Button action={startTimer}>Start</Button>
                <Button action={stopTimer}>Stop</Button>
                <Button action={resetTimer}>Reset</Button>
            </div>
        </div>
    )
}

export default Stopper