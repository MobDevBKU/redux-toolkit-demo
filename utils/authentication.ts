import { RUNNING_URL } from "@env";

async function authenticateUser(username: string, password: string) {
  const response = await fetch(`${RUNNING_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (response.ok) {
    // Save the access token to local storage
    const accessToken = data.access_token;
    const username = data.username;
    localStorage.setItem("accessToken", accessToken);

    // Return the user object and access token
    return { accessToken, username };
  } else {
    // Throw an error with the error message
    throw new Error(data.message);
  }
}

export { authenticateUser };
