import React, { Component } from 'react';

class Header extends Component{
    render(){
        return <div className="header">
            <div>
                <h1 className="titulo">TanatoTurismo</h1>
            </div>
            <div className="busqueda">
                <button className="boton">Search</button>
                <input type="text" placeholder="Search..." className="search"/>
            </div>
            <div>
                <a href="https://www.instagram.com/" className="i"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/" className="i"><i class="fab fa-youtube-square"></i></a>
                <a href="https://www.facebook.com/" className="i"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/home" className="i"><i class="fab fa-twitter-square"></i></a>
                <a href="https://github.com/" className="i"><i class="fab fa-github-square"></i></a>
            </div>

        </div>
    }
}

export default Header;