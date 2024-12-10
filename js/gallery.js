const numOfImages = 34;
const galleryContainer = document.getElementById("galleryContainer");

function selectImage(element) {
    element.parentNode.classList.add("selected");
    element.parentNode.insertAdjacentHTML("beforeend", `<button type="button" onclick="closeImage(this);" id="close">X</button>`);
    element.parentNode.insertAdjacentHTML("afterend", `<div id="placeholder"></div>`);
    document.body.style.overflow = "hidden";
}

function closeImage(element) {
    element.parentNode.classList.remove("selected");
    document.getElementById("placeholder").remove();
    document.getElementById("close").remove();
    document.body.style.overflow = "";

}

function generateGallery() {
    for (let i = 1; i <= numOfImages; i++) {

        const content = `
            <div>
                <img onclick="selectImage(this);" src="/assets/gallery_images/${i}.jpeg" alt="Gallery Image" height="50" width="auto">
            </div>
        `;

        galleryContainer.insertAdjacentHTML(
            "beforeend",
            content
        );
    }
}

generateGallery();