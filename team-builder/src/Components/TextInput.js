import React from "react";
import "./team.css";

export default function TextInput(props) {

    return (
        <div className="form-group">
            <label>{props.label}</label>
                <div className="field">
                    <input 
                        className="form-control"    
                        type="text"
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                    >
                    </input>
                </div>
                {props.error && <div
                    style={{color:"red", border:"1px solid black", width:"190px", textAlign: "center"}}
                    >{props.error}</div>}
                </div>
            )
        }