import React, { useState, useEffect } from 'react';

const TeamMemberForm = props => {
    const [person, setPerson] = useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        setPerson( { ...person, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        if (props.memberToEdit) {
            props.editMember(person);
        } else {
        props.addNewMember(person);
        }
        setPerson({name: '', email: '', role: ''});
    }

    useEffect(() => {
        console.log(props.memberToEdit);
        setPerson(props.memberToEdit);
    }, [props.memberToEdit]);

    return (
        <form onSubmit={submitForm} style={{display:`flex`, flexDirection:`column`, width:`350px`, margin:`0 auto`}}>
                <label htmlFor='inputName'>Full Name</label>
                <input id='inputName'
                    type='text'
                    name='name'
                    placeholder="Full Name"
                    onChange={handleChanges}
                    value={person.name}
                />
               <label htmlFor='inputEmail'>Email </label>
                <input id='inputEmail'
                    type='email'
                    name='email'
                    placeholder="Email"
                    onChange={handleChanges}
                    value={person.email}
                />
                <label htmlFor='inputJobRole'> Role </label>
                <select type='select' id='inputJobRole' 
                    onChange={handleChanges} 
                    name='role' 
                    value={person.role}>
                    <option value='Project Manager'>Project Lead</option>
                    <option value='UX Designer'>UX Designer</option>
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Back-End Engineer'>Back-End Engineer</option>
                    <option value='UI Developer'>UI Developer</option>
                    <option value='Mobile Developer'>Mobile Developer</option>
                    <option value='Data Scientist'>Data Scientist</option>
                    <option value='Other Position'>Other Position</option>
                </select>
     
          
            <button type='submit' style={{width:`84px`, margin:`32px auto`, padding:`5px`}}>{
                props.memberToEdit !== ''? 'Submit': 'Add'}</button>
        </form>
    )
}

export default TeamMemberForm;