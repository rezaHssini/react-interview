export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      Authorization: "Bearer abc123secretkey",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });

  const data = await res.json();
  return data;
};

export const login = async (email: string, password: string) => {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
};
