import React from "react";
import './style.css';
import reactlogo from './reactlogo.jpg';
import reactsvglogo from './react.svg';

export const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <img src={reactlogo} alt="react logo" width='300' height='300'/>
            <img src={reactsvglogo} alt="react logo" width='300'/>
        </div>
    )
}