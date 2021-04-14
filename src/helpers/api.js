export function getUser(user) {
  const queryEndpoint = `https://api.github.com/search/users?q=${user}`;

  return fetch(queryEndpoint)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.items[0];
    });
}
