import React from "react";

export default function SelectInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
                <div className="field">
                    <select
                        name={props.name}
                        label="Role"
                        value={props.value}
                        onChange={props.onChange}
                        className="form-control"
                        >
                            <option value="" />
                            <option value="Programmer">Programmer</option>
                            <option value="Writer">Writer</option>
                            <option value="Designer">Designer</option>
                        </select>
                </div>
                {props.error && <div
                    style={{color:"red", border:"1px solid black", width:"190px", textAlign: "center"}}
                >{props.error}</div>}
        </div>
    )
}