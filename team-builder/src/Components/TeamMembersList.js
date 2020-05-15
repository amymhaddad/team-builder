import React from 'react';
import Header from "./Header"

export default function TeamMembersList({member}) {
    const {name, email, role} = member

    return (
        <>
        <Header />
            <div className="box">
                
                <div className="member-details">Name: {name}</div>
                <div className="member-details">Email: {email}</div>
                <div className="member-details">Role: {role}</div>   

            </div>
        </>
    )
}