import React from 'react';
import "./About.css"
import CLogo from "./Capture.PNG"
class About extends React.Component{
    constructor(){
        super()
        this.state={}
        
    }
    
    render(){
        return(
            <div>
                <br />
                <br />
                <div class="main-div">
                    <div class="portofolio-div">
                        <div class="div-left">
                            <img src={CLogo} class="logo-img" height="200" width="200" />
                        </div>
                        <div class="div-right">
                            <br/>
                            <h3>About</h3>
                            <br />
                            <p>Hey there, I am Shridhar Kamat, I am a tech lover and I like to share my experiences while working with tech also telling you about the latest things and explaining some concepts which I know about like sensors, Arduino, Raspberry Pi, electronics, tech, and many more things! Currently, I know about 6 programming languages including Scratch, Arduino, Python, JavaScript, HTML, and CSS. I post regular content on my channel based on tech, giving tutorials on specific topics including projects like IoT and home automation systems and even giving my opinion on some topics. I love working with electronics and learning about them.</p>
                            <br />
                        </div>
                    </div>
                <br />
                </div>
            </div>
        )

    }

}
export default About;