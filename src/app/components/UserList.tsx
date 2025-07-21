import { useFetchUsers } from "../hooks/useFetchUsers";
import UserCard from "./UserCard";

export default function UserList() {
  const { users, loading } = useFetchUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {users.map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
