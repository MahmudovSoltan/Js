// async function getUserInfo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   data.forEach((element) => {
//     console.log(element);
//     const row = `
// <tr id=${element.id}>
//   <td>${element.name}</td>
//   <td>${element.email}</td>
// </tr>

// `;

//     body.innerHTML += row;
//   });
// }

// getUserInfo();

// const body = document.querySelector("#body");
// async function getPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   console.log(data);

//   data.forEach(element => {

//     const list = `
//     <li>
//   ${element.title}
//       </li>
//   `;

//   body.innerHTML += list
//   });

// }

// getPost();

// const input = document.querySelector("#input");
// const button = document.querySelector('button')
// button.addEventListener('click',getUserPost)
// async function getUserPost() {
//   const id = Number(input.value)
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await response.json();

//   console.log(data);
//   const list = `
//   <div>
//   Post title:  ${data.title}, <br/>  post  Body: ${data.body}
//     </div>

// `;

// body.innerHTML += list
// input.value = ''

// }
const input = document.querySelector("#input");
const button = document.querySelector("button");
button.addEventListener("click", getUserPost);
async function getUserPost() {
  const id = Number(input.value);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await response.json();

  console.log(data);
  data.forEach((element) => {
    const list = `
   <li class='border'>
      Title: ${element.name}
   </li>
   <li class='border'>
  Email: ${element.email}
   </li>
   <li class='border'>

  Boody: ${element.body}
   </li>
  
  `;
    body.innerHTML += list;
  });

  input.value = "";
}
