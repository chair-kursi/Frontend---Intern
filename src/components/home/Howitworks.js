import React, { Component } from 'react';
import '../../css/variables.css';
import '../../css/howitworks.css';

export class Howitworks extends Component {
    render() {
        return (
            <div>
                <h1 className="head">How It Works</h1>
                <div>
                    <div className="hexagon hx1"><span></span><h1 className="fs">Step 1</h1></div>
                    <div className="rectangle1"></div>
                </div>
                <div><div className="hexagon hx2"><span></span><h1 className="sc">Step 2</h1></div>
                    <div className="rectangle2"></div>
                </div>
                <div><div className="hexagon hx3"><span></span><h1 className="sc">Step 2</h1></div>
                    <div className="rectangle3"></div>
                </div>
                <div><div className="hexagon hx4"><span></span><h1 className="sc">Step 2</h1></div>
                    <div className="rectangle4"></div>
                </div>
                {/* <div className="hexagon hx1"><span></span><h1 className="fs">Step 1</h1></div>
            <div className="hexagon hx2"><span></span><h1 className="sc">Step 2</h1>
            <div className="hexagon hx3"><span></span><h1 className="th">Step 3</h1></div>
            <div className="hexagon hx4"><span></span><h1 className="fr">Step 4</h1></div> */}
                {/* <div class="hexagon"><span></span></div> */}
            </div>
        )
    }
}

export default Howitworks