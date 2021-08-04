import classes from "./UsersList.module.css";
import User from "../../../templates/User";
import Card from "../../UI/Card";

const UsersList: React.FC<{ users: User[] }> = (props) => {
  return (
    <Card className={classes["users"]}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.name}>
              {user.name} {user.age}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
