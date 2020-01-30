import React, { useState } from 'react';
import './App.css';
import Members from './components/Members';
import TeamMemberForm from './components/TeamMemberForm';


function App() {
  const [ teamList, setTeamList ] = useState([
    {
      id: '0',
      name: 'Jojo Zhang',
      email: 'jojo-zhang@gmail.com',
      role: 'Project Lead',

    },
    { id: '1',
      name: 'Raj Upadhyaya',
      email: 'xrajupadhyayax@gmail.com',
      role: 'Front-End Engineer',

    },
    {
      id: '2',
      name: 'Michael Nunes',
      email: 'miketnunes@gmail.com',
      role: 'Back-End Engineer', 
    },
    {
      id: '3',
      name: 'Kim Semenza',
      email: 'ksemenza.247@gmail.com',
      role: 'UI Developer',
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,

    };
    setTeamList([ ...teamList, newMember]);
  }

  const [memberToEdit, setMemberToEdit] = useState('');

  const addMemberToEdit = member => {
    setMemberToEdit(member);
  }

  const editMember = member => {
    let restOfList = teamList.filter(person => person.id !== member.id);
    restOfList.unshift(member);
    setTeamList(restOfList);
    setMemberToEdit('');
    
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Development Team</h1>
      </div>
     
      <TeamMemberForm addNewMember={addNewMember} memberToEdit={memberToEdit}
        editMember={editMember}/>
      <Members teamMembers={teamList} addMemberToEdit={addMemberToEdit}/>
    </div>
  );
}

export default App;
