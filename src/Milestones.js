import React from 'react';
import "./Milestones.css"
import ht from "./HTMLc.PNG"
import js from "./JSc.PNG"
import cs from "./Cssc.PNG"
import rc from "./Reactc.PNG"
import py from "./Pyc.PNG"
import bc from "./Bc.PNG"
class Milestones extends React.Component{
    constructor(){
        super()
        this.state={}
        
    }
    
    render(){
        return(
            <div>
                <br />
                <br />
                <h2 class="text-head">MILESTONES</h2>
                <br />
                <div class="cardr-div">
                    <div class="cardr">
                        <div class="carder-img">
                            <img src={ht} class="immil" />
                        </div>
                    </div>
                    
                    <div class="cardr">
                        <div class="carder-img">
                        <img src={cs} class="immil" width="367px" height="222px" />
                        </div>
                    </div>

                    <div class="cardr">
                        <div class="carder-img">
                        <img src={js} class="immil" />  
                        </div>
                    </div>

                    <div class="cardr">
                        <div class="carder-img">
                        <img src={py} class="immil" />  
                        </div>
                    </div>

                    <div class="cardr">
                        <div class="carder-img">
                        <img src={rc} class="immil"  width="367px" height="222px"/>  
                        </div>
                    </div>

                    <div class="cardr">
                        <div class="carder-img">
                        <img src={bc} class="immil"  width="367px" height="222px" />  
                        </div>
                    </div>
                </div>
                

                
            </div>
        )

    }

}
export default Milestones;