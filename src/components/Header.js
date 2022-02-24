import React from "react";
import './Header.css'; 


export default ({black}) => { 
    return (
        <header className={black ? 'black' : ''} > 
           <div className="logo"> 
                <a href="/"> 
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix"></img>
                
                </a>
           </div>

           <div className="usuario"> 
            <a href="/"> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
            
            </a>
           
           </div>
        </header>



    );
}