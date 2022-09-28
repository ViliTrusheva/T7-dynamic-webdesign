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
  const template = document.querySelector(".box1").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".box1 a img").src = product.img_link;
  console.log(product.img_link);
  clone.querySelector(".box1 a p").textContent = product.Bikini;

  clone.querySelector(".products a").href = `product.html?id=${product._id}`;

  const parent = document.querySelector("#rent_list_home");
  parent.appendChild(clone);

  // const urlParams = new URLSearchParams(window.location.search);
  // const gender = urlParams.get("linkId");
}
