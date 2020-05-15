import React from "react";
import TextInput from "./TextInput"
import SelectInput from "./SelectInput"

export default function TeamMemberForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput 
                id="name"
                name="name"
                label="Name"
                value={props.teammate.name}
                onChange={props.onChange}
                error={props.error.name}
                />
  
            <TextInput 
                id="email"
                name="email"
                label="Email"
                value={props.teammate.email}
                onChange={props.onChange} 
                error={props.error.email}
                />

                <SelectInput 
                    id="role"
                    name="role"
                    label="Role"
                    value={props.teammate.role}
                    onChange={props.onChange}
                    error={props.error.role}  
                />
            <input type="submit" value="Save" className="btn" />
        </form>
    )
}