import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import ErrorMessage from "../../../templates/ErrorMessage";
import Button from "../../UI/Button";
const AddUser: React.FC<{
  onAddUser: (name: string, age: string) => void;
}> = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  let def: ErrorMessage = { title: "", message: "" };
  const [error, setError] = useState(def);
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 13) {
      setError({
        title: "invalid input",
        message: "please enter a valid age",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError({ title: "", message: "" });
  };
  return (
    <div>
      {error.title && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes["input"]}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
