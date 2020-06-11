import React from 'react';
import "./Projects.css"
import proimg from "./Card1.PNG"
import prolamp from "./iotlamp.jpeg"
class Projects extends React.Component{
    constructor(){
        super()
        this.state={}
        
    }
    
    render(){
        return(
            <div>
                <br />
                <br />
                <h2>PROJECTS</h2>
                <br />
                <div class="carder-div">
                <div class="carder">
                    <a href="https://catopedia.netlify.app/">
                    <div class="carder-img">
                        <img src={proimg} width="250px" height="160px"/>
                    </div>
                    <div class="carder-text">
                    <h3>Catopedia</h3>
                    <p>A simple cat image generator based on the cat api for all cat lovers</p>
                    </div>
                    </a>
                </div>
                
                <div class="carder">
                    <a href="https://link.medium.com/LtowTMNVd7">
                    <div class="carder-img">
                        <img src={prolamp} width="300px" height="160px" />
                    </div>
                    <div class="carder-text">
                    <h3>Iot Lamp</h3>
                    <p>An Iot lamp controlled through Google Assistant with Wemos d1 R1</p>
                    </div>
                    </a>
                </div>

                <div class="carder">
                    <a href="https://link.medium.com/LtowTMNVd7">
                    <div class="carder-img">
                        <img src={prolamp} width="300px" height="160px" />
                    </div>
                    <div class="carder-text">
                    <h3>Iot Lamp</h3>
                    <p>An Iot lamp controlled through Google Assistant with Wemos d1 R1</p>
                    </div>
                    </a>
                </div>
                </div>
                

                
            </div>
        )

    }

}
export default Projects;