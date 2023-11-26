const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault()
  const productname = document.getElementById("exampleInputProducts1").value
  const Price = document.getElementById("exampleInputPrice1").value
  const Img = document.getElementById("exampleInputImg1").value
  var products = JSON.parse(localStorage.getItem("products"))
  // console.log(Sanpham);
  // console.log(Price);
  // console.log(Img);
  var product = {
    productname: productname,
  Price: Price,
  Img: Img,
  }
  if (products == null) {
    products = [products];
    localStorage.setItem("products", products);
  } else {
    products.push(product);
    localStorage.setItem("products", products);
  }
  localStorage.setItem("product_info", JSON.stringify(product))
})

submit.addEventListener("click", (e) => {
  e.preventDefault()
  var product_info = JSON.parse(localStorage.getItem("product_info"))
  console.log(product_info);
})
