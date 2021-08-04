import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import User from "./templates/User";

function App() {
  const def: User[] = [];
  const [usersList, setUsersList] = useState(def);
  const addUserHandler = (name: string, age: string) => {
    setUsersList((currentState: User[]) => {
      return [...currentState, { name, age }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
