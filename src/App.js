import logo from './logo.svg';
import './App.css';

const About=()=>{
  return(
  <div>
    <h1>Nerlapalli Dinesh Kumar Reddy</h1>
    <p>Assisstant System Engineer at TCS</p>
    <a href="https://www.linkedin.com/in/nerlapalli-dinesh-kumar-reddy/" target="_blank">LinkedIn</a>
    <a href="https://github.com/DineshReddy195" target="_blank">Github</a>
    <hr/>
  </div>
  )
}
const Experience=()=>{
  return(
    <div>
    <div>
    <h2>Experience</h2>
    <h3> Assisstant System Engineer at TCS</h3>
    <p>I work with amazon in transportation team, some more description Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam! Maxime officiis consequuntur libero eaque reprehenderit quisquam nam ab vitae totam id commodi laborum enim, sint ea odit quasi soluta!
        <br/>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iusto ut praesentium modi. Incidunt atque voluptatem, dignissimos officiis reprehenderit est!
    </p>
    </div>
    <hr/>

    <h3> Educator at Geekster</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cum inventore aliquam, nulla eos dignissimos ipsum voluptas id, dolores suscipit totam nostrum perferendis alias, expedita quaerat distinctio asperiores! Nobis, aliquid.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa ab qui autem nesciunt vel consequatur non totam, temporibus excepturi voluptatem iure impedit ut repellendus earum necessitatibus nemo eligendi, animi debitis reiciendis suscipit. Unde iure obcaecati dolores, numquam quibusdam rerum facilis a quam quos ad ullam consectetur reiciendis deserunt similique.
    </p>
    <hr/>
    </div>
  )
}

const Skills=()=>{
  return(
    <div>
      <h2>Skills</h2>
    <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Testing</li>
        <li>API Designing</li>
        <li>System Design</li>
    </ul>
    <hr/>
    </div>
  )
}

const Hobbies=()=>{
  return(
    <div>
    <h2>Hobbies</h2>
    <ol>
        <li>Table Tennis</li>
        <li>Reading Books</li>
        <li>Cricket</li>
        <li>Listening Music</li>
    </ol>
    <hr/>
    </div>
  )
}

const Card =()=> {
  return(
  <div>
    <About/>
    <Experience/>
    <Skills/>
    <Hobbies/>
    </div>
  )};

  

export default Card;
