const postId = window.location.search.split("=")[1];

console.log(postId);

//Variables
const detailDesc = document.querySelector("#detailDesc");
const detailTitle = document.querySelector("#detailTitle");
const detailImg = document.querySelector("#detailImg");
const detailCousin = document.querySelector("#detailCousin");

// Functions
function render(d) {
  detailImg.src = d.images[0];
  detailTitle.innerHTML = d.title;
  detailDesc.innerHTML = d.description;
}

function renderComments(cData) {
  document.querySelector("#commentList").innerHTML = cData
    .map(
      (item) => `
          <div class="border-bottom">
          <div class="h4">${item.title}</div>
          <p>
           ${item.description}
          </p>
          
        </div>
        `
    )
    .join("");
}

// Api's
async function getRecipeID() {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    
    render(data);
    renderComments(data.comments);
  } catch (err) {
  } finally {
  }
}

getRecipeID();

