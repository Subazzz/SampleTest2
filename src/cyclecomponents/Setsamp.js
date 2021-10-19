import React, { useState } from 'react';

function Setsamp() {
    const [name, setName] = useState ({ fname:'', lname:''})
    return (
        <form>
            <h3> First Name </h3>
           <input type= "text" value ={name.fname} onChange= {e => setName({...name, fname: e.target.value})}></input>
           <h3> Last Name </h3>
           <input type= "text" value ={name.lname} onChange= {e => setName({...name, lname: e.target.value})}></input>
            <h2>Your name is {name.fname} {name.lname} </h2>

        </form>
    );
}

export default Setsamp;