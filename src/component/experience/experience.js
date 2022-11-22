import React from "react";
import Img2 from './images/screen.png';
import './experience.css';


const MyExperience = () => {
    return(
        <div className="myExperience">
                <p className="paragraph">As I mentioned above, I didn't studied IT. I went at the University of La Sorbonne
                 and studied scandinavian languages and history from 2016 up till 2021. This was a great experience, that allowed me
                 to work in Norway. But I wanted a change. Learning a programming language such as JavaScript for example, is like Learning
                 a new real life language, like Greek. One learn new stuffs everyday, and one can communicate with someone or... something
                 in our case. It's not that different after all. I truly believe, that being passionate about something is better than a
                 thousand certificates. Speaking to a computer, solving problems and understand how the digital world works is open to everyone.
                </p>
                <img className="screen" src= {Img2} alt='coding experience on screen' /> 
            
        </div>
    )
}


export default MyExperience;