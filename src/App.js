import React, {useState} from "react";

import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/table/UserTable";


const App = () => {

  const userData = [{id: '', name: '', username: ''}];
  const [users, setUsers] = useState(userData);
  const [editing, setEditinh] = useState(false);

  const addUser = (user) => {
     user.id = users.length + 1
     setUsers([...users, user]);
  };

  return (
    <div className="App">
        <div className="row">
            <div className="col-6">
                <AddUserForm addUser={addUser}/>
            </div>
            <div className="col-6">
                <UserTable users={users}/>
            </div>
        </div>
    </div>
  );
}

export default App;
