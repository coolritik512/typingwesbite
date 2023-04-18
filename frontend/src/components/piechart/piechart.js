import React, { Component } from 'react'
import './piechart.css';
export default class piechart extends Component {

    componentDidMount() {
        console.log('pie chart')

        console.log(this.props);
        var ww = this.props.props.wrongword;
        var cw = this.props.props.correctword;


        var cwdeg = (cw) / (cw + ww) * 360;

        console.log(cwdeg * 100);
        var piechart = document.getElementById('piechart');

        piechart.style.backgroundImage = `conic-gradient(orange ${cwdeg}deg,yellow  0)`;
    }

    render() {
        return (
            <React.Fragment>
                <div id='piechartcontainer'>
                    <div id="piechart">
                    </div>

                    <div>
                        <div className='representation' style={{ backgroundColor: "orange" }}></div> Correct Word 
                    </div>
                    <div><div className='representation' style={{ backgroundColor: "yellow" }}></div> Wrong word
                    </div>

                </div>

            </React.Fragment>
        )
    }
}
