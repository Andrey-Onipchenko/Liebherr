class imageZoom {
  constructor(imageContainer, outImgSelector) {
    this.container =
      document.querySelector(imageContainer).parentNode.parentNode;
    this.zoomOut = document.querySelector(outImgSelector);
    this.nameContainer = imageContainer.substr(1);
    this.directionX = 0;
    this.directionY = 0;
    this.layerX = 0;
    this.layerY = 0;
    this.offsetY = 0;
    this.init();
  }
  init() {
    window.addEventListener("DOMContentLoaded", () => {
      this.imageFocus();
    });
  }
  imageFocus() {
    this.container.addEventListener("mousemove", (event) => {
      if (!event.target.classList.contains(this.nameContainer)) {
        if (event.pageX > this.directionX) {
          this.directionX = event.pageX;
          this.layerX = this.layerX + 2;
        } else if (event.pageX < this.directionX) {
          this.directionX = event.pageX;
          this.layerX = this.layerX - 2;
        }

        if (event.pageY > this.directionY) {
          this.directionY = event.pageY;
          this.layerY = event.layerY + event.target.offsetTop;
        } else if (event.pageY < this.directionY) {
          this.directionY = event.pageY;
          this.layerY = event.layerY + event.target.offsetTop;
        }

        this.zoomOut.style.left = `-${this.layerX * 2}px`;
        this.zoomOut.style.top = `-${
          this.layerY * (2.3 + this.offsetY / 1000)
        }px`;
      } else {
        this.offsetY = event.offsetY;
        this.layerX = event.layerX;
        this.layerY = event.layerY;
        this.zoomOut.style.left = `-${this.layerX * 2}px`;
        this.zoomOut.style.top = `-${
          this.layerY * (2.3 + this.offsetY / 1000)
        }px`;
      }
    });
  }
}

export default imageZoom;
