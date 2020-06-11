import React from 'react';
import "./Works.css"
class Works extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.incrementer=this.incrementer.bind(this)
    }
    incrementer(){
        setTimeout(() => {
            this.setState(prevState=>{return{count: prevState.count+1}});
          }, 1000)
    }
    
    componentDidMount(){
        this.incrementer()
    }
    componentDidUpdate(){
        if(this.state.count < 10){
            this.incrementer()
        }
    }

    render(){
        return(
           <div>
               <br />
               <br />
               <div class="main-v">
                   <div class="diver">
                    <i class="far fa-check-circle"></i>
                    </div>
                    <div class="counter">
                        {this.state.count}
                        <br />
                        Works Completed
                    </div>
               </div>
           </div>
        )

    }

}
export default Works;