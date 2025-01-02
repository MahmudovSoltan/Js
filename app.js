const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users";
const info = document.querySelector("#info");
const userNameInp = document.querySelector("#userNameInp");
let globalUser = [];
async function getUserFunc(url,url2) {
  try {
    const response = await fetch(url);
const response2 = await fetch(url2)
    const data1 = await Promise.all([response.json(),response2.json()]);
    console.log(data1);
    
  } catch (err) {
    console.log(err);
  }
}

getUserFunc(url,url2);

function addUserName() {
  const add = {
    title: userNameInp.value,
  };
  globalUser.unshift(add);
  userNameInp.value = "";
  info.innerHTML = globalUser
    .map((data) => `<div class="title">${data.title}</div>`)
    .join("");
}

userNameInp.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addUserName();
  }
  console.log("click");
});
