import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGalleryList = document.querySelector(".gallery");

function createGalleryItems(galleryItemsArray) {
  return galleryItemsArray
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="#" target= "_self">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
}
getGalleryList.insertAdjacentHTML(
  "beforeend",
  createGalleryItems(galleryItems)
);
getGalleryList.addEventListener("click", handleImageClick);

function handleImageClick(evt) {
  if (evt.target.classList.contains("gallery__image")) {
    const { source } = evt.target.dataset;
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);
    instance.show();
  }
}
