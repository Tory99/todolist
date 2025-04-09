import { useState } from "react";

// const Timer : React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);

//     return (
//         <div>
//             <h1>Timer</h1>
//             <p>{seconds} seconds</p>
//             <button onClick={ () => {
//                 setInterval(() => {
//                     setSeconds((prev) => prev + 1);
//                 }, 1000) }}>Start</button>
//             <button onClick={() => setSeconds(0)}>Reset</button>
//         </div>
//     );
// }



const Clock : React.FC = () => {
    const [time, settime] = useState(new Date());

    setInterval(() => {
        settime(new Date());
    }, 1000);

    return (
        <div>
            now : {time.toLocaleTimeString()}
        </div>
    );
}

export default Clock;