import { galleryItems } from "./gallery-items.js";
// Change code below this line

const getGallerySliderList = document.querySelector(".gallery");

function createGallerySliderItems(galleryItemsArray) {
  return galleryItemsArray
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    )
    .join("");
}
getGallerySliderList.insertAdjacentHTML(
  "beforeend",
  createGallerySliderItems(galleryItems)
);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  overlayOpacity: "1",
  captionDelay: 250,
});

gallery.on("show.simplelightbox", function () {});
