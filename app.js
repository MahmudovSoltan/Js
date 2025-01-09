const peoduct_content = document.querySelector("#peoduct_content");

async function getProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    data.products.forEach((element) => {
      peoduct_content.innerHTML += `

      <div class="card" style="width: 18rem;">
    <img src=${element.images} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>

      <div>
        <div>
            Price: <span>${element.price}</span>
        </div>
        <div>
           Raiting <span>${element.rating}</span>
        </div>
        <div>
            Tags <span>${element.tags}</span>
        </div>
        <div>
            Stock <span>${element.stock}</span>
        </div>
        <div>
           Brand <span>${element.brand}</span>
        </div>
      
      </div>
      <a href="./productDetail.html?post_id=${element.id}" class="btn btn-primary">Details</a>
    </div>
  </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
}

getProduct();
