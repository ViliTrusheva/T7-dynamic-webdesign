const url = "https://kea22-427f.restdb.io/rest/bikinis";

const options = {
  headers: {
    "x-apikey": "63333fb632330102d591d247",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(function (data) {
    dataReceived(data);
  });

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product_list template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".products .product_name").textContent = product.Bikini;
  clone.querySelector(
    ".products .product_price"
  ).textContent = `${product.Price}  DKK`;

  clone.querySelector(".products img").src = product.img_link;

  const parent = document.querySelector("#product_list");
  parent.appendChild(clone);

  // const urlParams = new URLSearchParams(window.location.search);
  // const gender = urlParams.get("linkId");
}
