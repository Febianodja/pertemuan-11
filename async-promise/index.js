const getGithubProfile = () => {
  const api = "https://api.github.com/users/febianodja";
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      let display = `<img src="${data.avatar_url}"><br>
                    <h1>${data.name}</h1><br>
                    <p>${data.bio}<br>
                    Followers: ${data.followers}<br>
                    Following: ${data.following}</p>`;
      const displayTampung = document.querySelector('.container');
      displayTampung.innerHTML = display;
    })
    .catch((error) => console.log("error", error));
};
getGithubProfile();