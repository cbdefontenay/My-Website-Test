import React from "react";
import Img1 from '../about/images/me.JPG';
import './about.css';


const AboutMe = () => {
        return(
            <div className="aboutMe">
                <img className='me' src={Img1} alt='my profile' />
                <p className="myText">My name is Cyprien Bourdeau de Fontenay. I come from France, but am currently living in North-Germany.
                For the past few months, I have been learning Web development of my own, with the help of online resources. I have also done 
                the "Zero to Mastery" bootcamp for Web development, from the famous Andrei Neagoie. I never studied IT at the university, but I've been
                growing in a digital world that is always evolving. This interest for the Web development is something that was spinning in my head for a long time now.
                I love learning new things, new technologies, solving problems, and that's why I would like to begin a career as a Web developer.

                </p>
            </div>
        )
    }







export default AboutMe;