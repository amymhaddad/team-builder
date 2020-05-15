import React, { useState } from 'react';
import TeamMemberForm from "./TeamMemberForm";

export default function ManageTeamMembersPage(props) {
    let [teammate, setTeammate] = useState({
        name:"",
        email: "",
        role: "",
    })
    
    let [errors, setError] = useState({})

    function handleChange(event) {
        const newMember = {...teammate, [event.target.name]: event.target.value}
        setTeammate(newMember)
    }
 
    function isValid() {
        const _errors = {};
        if (!teammate.name)_errors.name="You must enter a name."   
        if (!teammate.email)_errors.email="You must enter an email."        
        if (!teammate.role)_errors.role="You must enter a role."             

        setError(_errors)
        return Object.keys(_errors).length === 0;
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();

        if (!isValid()) return;
        props.onChildSubmit(teammate)

        setTeammate({
            name:"",
            email: "",
            role: "",
        })
    }

    return (
        <>
        <TeamMemberForm 
            teammate={teammate} 
            onChange={handleChange}
            onSubmit={handleFormSubmit}
            error={errors}
            />
        </>
    )
}