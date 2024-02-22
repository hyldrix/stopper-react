import styles from './Timer.module.scss'

const Timer = ({ time }) => {


    const formatTime = (duration) => {

        function pad(num) {
            return `${num}`.padStart(2, '0');
        }
        let asSeconds = duration / 1000;
    
        let hours = Math.floor(asSeconds / 3600);
        let minutes = Math.floor(asSeconds / 60);
        let seconds = Math.floor(asSeconds % 60);
    
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            minutes %= 60;
        }
    
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${(duration%1000)}`

    }



    return (
        <h2>{formatTime(time)}</h2>
    )
}

export default Timer;