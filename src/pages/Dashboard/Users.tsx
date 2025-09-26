import UserCard from "@/components/common/UserCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ChangeEvent, useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://api.escuelajs.co/api/v1/users");
      const data = await resp.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const getRole = (value) => {
    console.log("value", value);
    let filteredUsers = users.filter(
      (User) => User.role.toLowerCase() === value.toLowerCase()
    );
    setFiltered(filteredUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [users]);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl pb-10">Users</h1>

        <Select onValueChange={getRole}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Customer">Customer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-12 gap-7">
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div className="col-span-12 md:col-span-3">
              <Skeleton className="w-full h-[400px]" />
            </div>
          ))}
        {filtered
          ? filtered.map((User, index) => (
              <div className="col-span-12 md:col-span-3">
                <UserCard card={User} />
              </div>
            ))
          : users.map((User, index) => (
              <div className="col-span-12 md:col-span-3">
                <UserCard card={User} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Users;
