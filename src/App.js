import React, {Fragment, useState} from "react";

import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/table/UserTable";
import EditUserForm from "./components/EditUserForm";


const App = () => {

  const userData = [{id: null, name: '', username: ''}];
  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
     user.id = users.length + 1
     setUsers([...users, user]);
  };

  const updateUser = (id, updateUser) => {
      setEditing(false)
      setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  const editRow = (user) => {
      setEditing(true)
      setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  return (
    <div className="App">
        <div className="row">
            <div className="col-6">
                { editing ?  (
                    <Fragment>
                        <h2>Modifier l'utilisateur</h2>
                        <EditUserForm
                            editing={editing}
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <AddUserForm addUser={addUser}/>
                    </Fragment>
                )}
            </div>
            <div className="col-6">
                <UserTable users={users} editRow={editRow}/>
            </div>
        </div>
    </div>
  );
}

export default App;
