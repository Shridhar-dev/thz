import React from 'react';
import "./Contact.css"
import ml from "./milkyway.jpg"
class Contact extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            message:''
        }
        this.handleChange=this.handleChange.bind(this)
        
    }
    handleChange(event){
        const name =event.target.name 
        this.setState({
            [name] : event.target.value
        })
    }
    
    render(){
        return(
            <div class="former">
            <div class="img-div">
                <img src={ml} width="1350" height="700" class="footimg"/>
                
            
            <div class="container">
                <br /><br />   
                <form action="https://send.pageclip.co/GCOoIfkFukWEofZ6gQZNETve2h0liDL1/contact-form" class="pageclip-form" method="post">
                    <h3 class="messenger">Send us a message</h3>
                    <input type="text" name="name"  onChange={this.handleChange} placeholder="Name" />
                    <input type="email" name="email" onChange={this.handleChange}  placeholder="Email" />
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" onChange={this.handleChange} ></textarea>
                    <div class="buton">
                    <button type="submit" class="pageclip-form__submit btn btn-primary ">
                        <span>Send</span>
                    </button>
                    </div>
                    <h6 class="messenger">Get in touch</h6>
                    <ul class="list-ico">
                        <li>Goa,India</li>
                        <li>shridharkamat10@gmail.com</li>
                    </ul>
                </form>
            </div>
            <br /><br />
            
            </div>
            </div>
        )

    }

}
export default Contact;