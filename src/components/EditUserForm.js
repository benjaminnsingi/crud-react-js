import React, {useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap";


const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(
        () => {
            setUser(props.currentUser)
        }, [props]
    );

    const handleSubmit = (event) => {
        event.preventDefault();

        props.updateUser(user.id, user)
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value })
        console.log(event.target.value);
    };

    return (
        <div className="container">
            <h1>Formulaire d'ajout</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" value={user.name} placeholder="Nom" onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name="username" value={user.username} placeholder="Pseudo" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => props.setEditing(false)}>
                    Modifier
                </Button>
            </Form>
        </div>
    )
}

export default EditUserForm;