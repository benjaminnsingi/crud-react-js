import React from "react";
import {Table} from "react-bootstrap";


const UserTable = (props) => {
    return (
        <div className="container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Pseudo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.users.length > 0 ? (
                     props.users.map((user) => (
                         <tr key={user.id}>
                             <td>{user.name}</td>
                             <td>{user.username}</td>
                             <td>
                                 <button className="btn btn-primary" onClick={() => props.editRow(user)}>Modifier</button>
                                 <button className="btn btn-danger">Supprimer</button>
                             </td>
                         </tr>
                     ))
                    ) : (
                        <tr>
                            <td>Aucun utilisateur trouvé</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable;