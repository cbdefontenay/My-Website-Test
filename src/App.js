import React, {Component} from 'react';
import NavBar from './component/navbar/navbar';
import ParticlesBg from 'particles-bg';
import AboutMe from './component/about/about';
import MyExperience from './component/experience/experience';
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      about: '',
      particules: ''
    }
  }

  render(){

    const about = () => {
      this.setState(AboutMe);
    }

    

    return (
      <div className="App">
          <NavBar />
          <AboutMe {...about} />
          <MyExperience />
          <ParticlesBg color="#000000" num={900} type="lines" bg={{position: "fixed", zIndex: -1, top: 0, bottom: 0}} />
      </div>
    );
  }
}



export default App;
