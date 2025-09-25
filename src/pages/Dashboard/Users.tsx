import UserCard from "@/components/common/UserCard";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch("https://api.escuelajs.co/api/v1/users");
    const data = await resp.json();

    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("users", users);
  }, [users]);
  return (
    <div>
      <h1 className="font-bold text-3xl">Users</h1>
      <div className="grid grid-cols-12 gap-5">
        {users.map((User, index) => (
          <div className="col-span-3">
            <UserCard card={User} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
