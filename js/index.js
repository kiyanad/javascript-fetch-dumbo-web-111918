const app = "I don't do much.";
const token = '5328a2b62eba796e0a3fcd59d2017c48013b48a0'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
      }
    })
  .then(res => res.json())
  .then(json => console.log(json));
