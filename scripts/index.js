import { products } from "./products.js";
function generateGalleryItem (product) {
  return `<div class="product-item" data-id=${product.id}>
      <div class="product-image">
        <img src=${product.img} />
      </div>
      <div class="product-name">
        <p>${product.name}</p>
      </div>
    </div>`
}

function generateGallery(products) {
  let galleryHTML = "";
  products.forEach( (product) => {
    galleryHTML += generateGalleryItem(product);
  })
  return galleryHTML;
}

document.querySelector('.product-list').innerHTML=generateGallery(products);


