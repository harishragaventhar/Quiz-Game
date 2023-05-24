import React from "react";
import './firstpage.css'
import { Link } from "react-router-dom";

function Firstpage(){
    const getusername = () => {
        var userName = document.getElementById("textBox1").value;
        localStorage.setItem('getUserName',userName);
      }
    
    return(
        <>
        <div className="container-fluid maindivfirstpage text-center">
            
        <h1 className="text-white">Sports Quiz</h1>
        <input className="inputfield pt-2" type="text" id="textBox1" placeholder="Enter Your Username"/><br/>
        <Link to='/secondpage'><button type="button" onClick={getusername} className="btn rounded-pill col-lg-1 col-4 col-md-4 buttonfirstpage pt-2">START</button></Link>


        </div>
        </>
    );
}
export default Firstpage