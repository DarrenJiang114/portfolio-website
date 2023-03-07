import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'a', 'r', 'r', 'e', 'n']
    const jobArray = ['F',  'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ',
    'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                
                <h1>Hi, <br/> I'm  
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx={21}/>
                 <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                idx={28}/>
                </h1>
                <h2>Javascript / Java / Python / React</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home