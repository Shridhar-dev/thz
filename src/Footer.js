import React from 'react';


class Footer extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    
    render(){
        return(
          <p style={{fontSize:"3vh",color:"white",textAlign:"center",margin:0}}>© Copyright Shridhar Kamat. All Rights Reserved</p>
        )

    }

}
export default Footer;