import React from 'react';
import "./Header.css"
import imger from "./186733.jpg"

class Header extends React.Component{
    constructor(){
        super()
        this.state={}
        
    }
    
    render(){
        return(
            <div>
            <div class="parallax-img">
                <img src={imger} alt="img" class="img1" width="1330" height="700" />
            </div>
            <div class="imger-div">
            <h1 class="imger-text">Shridhar Kamat</h1>
            </div>
            </div>
        )
    }

}
export default Header;