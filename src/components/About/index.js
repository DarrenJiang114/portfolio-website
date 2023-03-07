import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const About = () => {
    
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    Hi, I'm Darren, an ambitious full stack developer looking for a role
                    where I can develop my skills by working with the latest technology and
                    working on challenging projects.
                </p>
                <p>My technology stack includes Java, Javascript, React, Node, HTML5, CSS, Python, MySQL, MongoDB, 
                    ASM, C, Angular, and Typescript.
                </p>
                <br></br>
                <h1>
                    <AnimatedLetters  strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}/>
                </h1>
                <h2>Brainiac Web App</h2>
                <a target="_blank" rel='noreferrer' href="https://github.com/jdeguzman1231/brainiac-react-app">
                    <h3>Link To Frontend</h3>
                </a>
                <a target="_blank" rel='noreferrer' href="https://github.com/shanacheng/brainiac-app">
                    <h3>Link To Backend</h3>
                </a>
                <p>Quizlet-like app that allows customizeable learning tools. Includes Flashcards, Multiple Choice,
                    and Matching questions to be built and shared.
                </p>
                <p>Tech Stack: Javascript, Node.js, React, Express, MongoDB, GraphQL</p>
                <a target="_blank" rel='noreferrer' href="https://github.com/DarrenJiang114/AuctionHouse">
                    <h2>Auction House database </h2>
                </a>
                <p>Ebay-like database system for auctioning items for purchase.</p>
                <p>Tech Stack: MySQL, Java, JDBC</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#DD0031"/>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default About