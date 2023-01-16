import React, {useState} from "react";


const RobotForm = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [mass, setMass] = useState('');
    const {onAdd} = props;



    //  addRobot = () => {
    //     // onAdd is an async function -> we can use then
    //     onAdd({
    //         name, 
    //         type, 
    //         mass
    //     }).then(() =>  {
    //         // reset form fields
    //         setName('');
    //         setType('');
    //         setMass('');
    //     });
    // }

		return (
			<div className="robot-form">
            <h2>Add a new robot</h2>
            <div className="robot-form-fields">
                <input type="text" placeholder="robot name" onChange={(event) => setName(event.target.value)} value={name}/>
                <input type="text" placeholder="robot type" onChange={(event) => setType(event.target.value)} value={type} />
                <input type="text" placeholder="robot mass" onChange={(event) => setMass(event.target.value)} value={mass} />

                <button className="add-robot-btn">Add robot</button>
            </div>
        </div>
		)
	};



export default RobotForm;


