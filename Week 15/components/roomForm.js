import React, { useState }  from "react";


const RoomForm = (props) => {
    const [ name, setName ] = useState('');
    const [ area, setArea ] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            alert('Invalid input');
        }
    }

    return (
        <div className="form-group">
            <input type='text' placeholder="name" onChange={handleNameInput} value={name}></input>
            <input type='text' placeholder="area" onChange={handleAreaInput} value={area}></input>    
            <button className="btn btn-primary" onClick={onSubmit}>Submit</button>        
        </div>
    )
}

export default RoomForm;