function download(href, filename) {
    const invisibleLink = document.createElement("a");
    invisibleLink.href = href;
    invisibleLink.download = filename;
    invisibleLink.click();
}