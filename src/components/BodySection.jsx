import React from "react";
import '../main.css'
const Body = () =>{
    return (
        <div className="section">
            <div>
                <h1 className="section-h1">Fun facts about React</h1>
            </div>
            <div>
                <ul className="nav-list">
                    <li className="ele">Was first released by 2013</li>
                    <li className="ele">Was originally created by <strong>Jordan Walke</strong></li>
                    <li className="ele">Has well over 100k stars in Github</li>
                    <li className="ele">Is maintained by Facebook</li>
                    <li className="ele">Powers thousands of enterprise apps</li>
                </ul>
            </div>
        </div>
    );
};

export default Body;