const urlParams = new URLSearchParams(window.location.search);
const productNum = urlParams.get("id");
console.log(productNum);
const url =
  "https://kea22-427f.restdb.io/rest/bikinis?q={%22_id%22%20:%20%22${productNum}%22}";

//thats example from first database assignment
//const url = `https://kea-alt-del.dk/t7/api/products/${productNum}`;

// test link to one of id products from our database
// https://kea22-427f.restdb.io/rest/bikinis?q={%22_id%22%20:%20%22632d5dfa70a5204f0003a483%22}
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
  const template = document.querySelector("#choosen_product template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".product_details .product_name").textContent =
    product.Bikini;
  clone.querySelector(
    ".product_details .product_price"
  ).textContent = `${product.Price}  DKK`;

  clone.querySelector(".product_details img").src = product.img_link;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
