import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";


const AddUserForm = (props) => {

    const initialFormState = {id: null, name: '', username: ''};
    const [user, setUser] = useState(initialFormState);

    const handleSubmit = (event) => {
        event.preventDefault();

        props.addUser(user);
        setUser(initialFormState)
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value })
        console.log(event.target.value);
    };

    return(
       <div className="container">
           <h1>Formulaire d'ajout</h1>
           <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control type="text" name="name" value={user.name} placeholder="Nom" onChange={handleInputChange}/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Control type="text" name="username" value={user.username} placeholder="Pseudo" onChange={handleInputChange}/>
               </Form.Group>
               <Button variant="primary" type="submit">
                   Ajouter
               </Button>
           </Form>
       </div>
    )
}

export default AddUserForm;