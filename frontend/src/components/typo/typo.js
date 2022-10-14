import React,{useState}from "react";
import './typo.css'


function typo(props) {
    // console.log(props.textdetails.punctuation);
    return (
        <React.Fragment>
            <div className="setting">
                <div className="settingcontainer">
                    <div className="container">
                        <div className="typecontainer">
                            <input className="button" type={"button"} value="punctuation" onClick={() => fxn('punctuation', props)} />
                        </div>
                        <div className="typecontainer">
                            <input className="button" type={"button"} value="number" onClick={() => fxn('number', props)} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="typecontainer">
                            <input className="button" type={"button"} value="10s" onClick={()=>settime(10000,props)} />
                        </div>
                        <div className="typecontainer">
                            <input className="button" type={"button"} value="30s" onClick={()=>settime(30000,props)} />
                        </div>
                        <div className="typecontainer">
                            <input className="button" type={"button"} value="60s" onClick={()=>settime(60000,props)}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function settime(time, props){
    console.log('setting time ');
    props.state.settimer(time);
}
function fxn(select, props) {
    console.log("typing option selecting");
    console.log(props);

    props.state.textdetails[select]=true;
    props.state.changetextdetails(props.state.textdetails);
}

export default typo;