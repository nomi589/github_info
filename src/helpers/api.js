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
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export function getRepos(language) {
  const queryEndpoint = `https://api.github.com/search/repositories?q=language=${language}&sort=stars&order=desc`;

  return fetch(queryEndpoint)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const repos = data.items;

      return repos.map((repo) => {
        return {
          title: repo.full_name,
          url: repo.html_url,
          avatar: repo.owner.avatar_url,
          owner: repo.owner.login,
          owner_url: repo.owner.html_url,
        };
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
}
