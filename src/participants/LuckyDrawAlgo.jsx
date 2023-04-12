import { useEffect, useState } from 'react';
// import './c.css'
import data from './data';
import { shuffle } from 'lodash';
// import { useTransition, animated } from 'react-spring';
import Replay from '../img/replay.svg';

function LuckyDrawAlgo(){
    const [names, setNames] = useState(data);
    const [initialLoad, setInitialLoad] = useState(false);
    //to return one name value only when we pressed button
    function startRaffle(){
        if(names.length <=1 ){
            return
        }
        const randomIndex = Math.floor(Math.random() * names.length);
        const filterOutNames = names.filter((name) => name != names[randomIndex]);
        setNames(filterOutNames)
        setInitialLoad(true);
    }

    
    useEffect(() => {
        if(initialLoad){
            //set time for the name to be remove 1 by 1
            const filteringTimer = setTimeout(() => 
            {startRaffle()}, 100);
            return() => clearTimeout(filteringTimer);
        }
    }, 
    //dependency to start raffle
    [names, startRaffle, initialLoad]);

    function restartRaffle() {
        setInitialLoad(false);
        setNames(data);
        // setWraffling(false);
        // setShowConfetti(false);
      }

    return(
        <div className='App'>
            <button onClick={startRaffle}>
                Start Raffle
            </button>
            <button onClick={() => setNames(shuffle(names))}>
                Shuffle
            </button>
                {names.map((names, index) => (
                    <div key={index}>
                        <ul>
                            <li>{names.name}</li>
                        </ul> 
                    </div>
                ))}
                <div className="raffle-ends">
                    <h3>Congratulations! You have won the raffle!</h3>
                    <button className="button-outline" onClick={restartRaffle}>
                    <img src={Replay} alt="heading logo" />
                    Replay
                    </button>
                </div>
        </div>
    );
}

export default LuckyDrawAlgo;
