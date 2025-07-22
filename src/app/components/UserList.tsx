import React, { useEffect, useState } from "react";
import { fetchUsers } from "../lib/api";

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {users.map((u, i) => (
        <div key={i}>
          <p>{u.name}</p>
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
