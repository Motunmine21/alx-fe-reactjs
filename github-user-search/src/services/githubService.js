
const BASE_URL = "https://api.github.com";

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
   
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=20`);
    const data = await response.json();

   
    const detailedUsers = await Promise.all(
      data.items.map(async (user) => {
        const res = await fetch(user.url);
        return await res.json();
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
