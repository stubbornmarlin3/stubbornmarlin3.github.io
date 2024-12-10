const numOfImages = 34;
const galleryContainer = document.getElementById("galleryContainer");

function selectImage(element) {
    console.log(element.getAttribute("data-index"));
    const index = element.getAttribute("data-index");
    element.src = `/assets/gallery/full_size/${index}.jpeg`;
    element.removeAttribute("onclick");
    element.parentNode.classList.add("selected");
    element.parentNode.insertAdjacentHTML("beforeend", `<button type="button" onclick="closeImage(this);" id="close">X</button>`);
    element.parentNode.insertAdjacentHTML("afterend", `<div id="placeholder"></div>`);
    document.body.style.overflow = "hidden";
}

function closeImage(element) {
    const index = element.previousElementSibling.getAttribute("data-index");
    element.previousElementSibling.src = `/assets/gallery/small/${index}.jpeg`;
    element.previousElementSibling.setAttribute("onclick", "selectImage(this);")
    element.parentNode.classList.remove("selected");
    document.getElementById("placeholder").remove();
    document.getElementById("close").remove();
    document.body.style.overflow = "";
}

function generateGallery() {
    for (let i = 1; i <= numOfImages; i++) {

        const content = `
            <div>
                <img data-index="${i}" loading="lazy" onclick="selectImage(this);" src="/assets/gallery/small/${i}.jpeg" alt="Gallery Image" height="50" width="auto">
            </div>
        `;

        galleryContainer.insertAdjacentHTML(
            "beforeend",
            content
        );
    }
}

generateGallery();