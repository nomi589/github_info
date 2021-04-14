export function getUsers(user) {
  const queryEndpoint = `https://api.github.com/search/users?q=${user}`;

  return fetch(queryEndpoint)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const users = data.items;

      return users.map((user) => {
        return {
          title: user.login,
          url: user.html_url,
          avatar: user.avatar_url,
        };
      });
    });
}
