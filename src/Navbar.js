import React from 'react';
import "./Navbar.css"
class Navbar extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>    
            <nav class="navbar navbar-dark navbar-expand-lg">
                <a href="#" class="navbar-brand">THE HARDWARON ZONE</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="navbar-item">
                            < a href="https://twitter.com/shridhar_kdev" class="nav-link">Twitter</a>
                        </li>
                        <li class="navbar-item">
                            < a href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber" class="nav-link">YouTube</a>
                        </li>
                        <li class="navbar-item">
                            < a href="https://github.com/Shridhar-dev" class="nav-link">Github</a>
                        </li>
                        <li class="navbar-item">
                            < a href="#" class="nav-link">Ping Me</a>
                        </li>
                    </ul>
                </div>
                </nav>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </div>
        )

    }

}
export default Navbar;