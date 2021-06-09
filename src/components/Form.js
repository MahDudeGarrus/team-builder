import React from 'react';

export default function Form(props){

    const { values, update, sumbit } = props;

    const onChange = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        update(inputName, inputValue)
    }

    const onSubmit = event => {
        event.preventDefault()
        sumbit()
    }

    return (
        <div>
            <h1>Squadmates</h1>


            <form className='meFriendsForm' onSubmit={onSubmit}>
                <label htmlFor='firstname'>First Name: 
                    <input type='text' name='firstname' value={values.firstname} placeholder="given name only" onChange={onChange}/> 
                </label>

                <label htmlFor='lastname'>Last Name:
                    <input type='text' name='lastname' value={values.lastname} placeholder="family name only" onChange={onChange}/>
                </label>

                <label htmlFor='age'>Age:
                    <input type='text' name='age' value={values.age} placeholder="human numbers only" onChange={onChange}/>
                </label>

                <label htmlFor='warclass'>War Class:
                    <select name='warclass' value={values.warclass} onChange={onChange}>
                        <option value=''>--Select your War Class--</option>
                        <option value='adept'>Adept (Biotic Spec.)</option>
                        <option value='soldier'>Soldier (Combat Spec.)</option>
                        <option value='engineer'>Engineer (Tech Spec.)</option>
                        <option value='vanguard'>Vanguard (Biotic/Combat)</option>
                        <option value='sentinel'>Sentinel (Tech/Biotic)</option>
                        <option value='inifiltrator'>Inifiltrator (Tech/Combat)</option>
                    </select>
                </label>

                <label htmlFor='species'>Species:
                    <select name='species' value={values.species} onChange={onChange}>
                        <option value=''>--Alien Species Please--</option>
                        <option value='asari'>Asari</option>
                        <option value='human'>Human</option>
                        <option value='turian'>Turian</option>
                        <option value='salarian'>Salarian</option>
                        <option value='batarian'>Batarian</option>
                        <option value='vorcha'>Vorcha</option>
                        <option value='krogan'>Krogan</option>
                        <option value='quarian'>Quarian</option>
                        <option value='hanar'>Hanar</option>
                        <option value='drell'>Drell</option>
                        <option value='elcor'>Elcor</option>
                        <option value='volus'>Volus</option>
                        <option value='keeper'>Keeper</option>
                        <option value='geth'>Geth</option>
                        <option value='reaper'>Reaper</option>
                        <option value='yahg'>Yahg</option>
                        <option value='rachni'>Rachni</option>
                        <option value='prothean'>Prothean</option>
                        <option value='nondisclosed'>I'd rather not disclose</option>
                    </select>
                </label>

                <label>Bio:
                    <textarea name="bio" value={values.bio} placeholder="Enter bio of squadmate" onChange={onChange}/>
                </label>               
            </form>        
        
            <div type='submit'>
                <button>Register Squadmate</button>
            </div>
        </div>
    )
} 