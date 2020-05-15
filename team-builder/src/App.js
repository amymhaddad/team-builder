import React, { useState } from 'react';
import './App.css';
import TeamMembersList from "./Components/TeamMembersList";
import ManageTeamMembersPage from "./Components/ManageTeamMembersPage"

function App() {
  let [members, setMember] = useState([])
  
  function handleSubmit(teammate) {
    setMember([...members, teammate])
    }
  
  return (
    <div>
      <div>
        <ManageTeamMembersPage onChildSubmit={handleSubmit}  />
        {members.map(member => (
          <TeamMembersList member={member} />
        ))}
      </div>
    </div>

);
}
export default App;