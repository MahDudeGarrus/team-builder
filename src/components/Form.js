import React from 'react';

export default function Form(props){

    const {values} = props;

    return (
        <div>
            <h1>Squadmates</h1>


        <form className='meFriendsForm'>
            <label htmlFor='firstname'>First Name: 
                <input type='text' name='firstname' value={values.firstname} placeholder="first name only" /> 
            </label>

            <label htmlFor='lastname'>Last Name:
                <input type='text' name='lastname' value={values.lastname} placeholder="last name only" />
            </label>

            <label htmlFor='age'>Age:
                <input type='text' name='age' value={values.age} placeholder="numbers are appreciated" />
            </label>

            <label htmlFor='warclass'>War Class:
                <select name='warclass' value={values.warclass} >
                    <option value=''>--Select your War Class--</option>
                    <option value='adept'>Adept (Biotic Spec.)</option>
                    <option value='soldier'>Soldier (Combat Spec.)</option>
                    <option value='engineer'>Engineer (Tech Spec.)</option>
                    <option value='vanguard'>Vanguard (Biotic/Combat)</option>
                    <option value='sentinel'>Sentinel (Tech/Biotic)</option>
                    <option value='inifiltrator'>Inifiltrator (Tech/Combat)</option>
                </select>

            </label>
        </form>        
        
        </div>
    )
} 