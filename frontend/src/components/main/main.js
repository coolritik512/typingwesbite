import React from "react";

import Navbar from "../navbar/navbar";
import Typing from "../typing/typing";
import Typo from "../typo/typo";
import Result from "../result/result";
import "./main.css";


var worddetails = { wrongword: 0, correctword: 0 };
// var textdetails = { punctuation : false , number : false };
class Main extends React.Component {
    state = {
        textdetails: {
            punctuation: false,
            number: false,
        },
        changetextdetails: (ans) => {
            this.setState((currentstate) => {
                return { textdetails: ans }
            })
        },
        timer: 30000,
        settimer: (newTimer) => {
            console.log("setting time : " + newTimer);
            this.setState(() => {
                return { time: newTimer }
            });
        },
        // begintime: () => {
        //     console.log('begining time');
        //     this.setState(()=>{})
        // },
        begintime: () => {
            setTimeout(() => {
                this.setState(() => {
                    return { showresult: true }
                });
            }, this.state.timer)
        },
        // timeout: 
        showresult: false,
    }

    render() {
        return (
            <React.Fragment>

                {this.state.showresult == false ? <div className="center">
                    <Navbar />
                    <Typo state={this.state} />
                    <Typing state={this.state} worddetails={worddetails} />

                </div>
                    : <div className="center"><Navbar /> <Result state={this.state} worddetails={worddetails} /></div>}

            </React.Fragment>
        );
    }
}

export default Main;