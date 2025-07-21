export default function UserCard({ user }: { user: any }) {
  return (
    <div style={{ border: "1px solid gray", marginBottom: 10 }}>
      <img src={user.avatar} width="40" height="40" />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
