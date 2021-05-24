class imageZoom {
  constructor(imageContainer, outImgSelector) {
    this.container = document.querySelector(imageContainer);
    this.zoomOut = document.querySelector(outImgSelector);
    this.init();
  }
  init() {
    window.addEventListener("DOMContentLoaded", () => {
      this.imageFocus();
      console.log("load");
    });
  }
  imageFocus() {
    this.container.addEventListener("mousemove", (event) => {
      // console.dir(this.container);
      // console.dir(event.layerX);
      // console.log(event.y);
      this.zoomOut.style.left = `-${event.layerX * 2}px`;
      if (event.layerY > 300) {
        this.zoomOut.style.top = `-${event.layerY * 2.8}px`;
      } else {
        this.zoomOut.style.top = `-${event.layerY * 2.5}px`;
      }
    });
    // ref.addEventListener("mousemove", (event) => {
    //   //   console.log(event.x);
    //   img.style.left = `-${event.x}px`;
    //   img.style.top = `-${event.y * 2.5}px`;
    // });
  }
}

// let imageZoom = "hi";

export default imageZoom;
