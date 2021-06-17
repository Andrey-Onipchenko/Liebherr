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
      // console.dir(event.target.offsetTop);
      // console.dir(event.layerY);
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
      // console.dir(document.querySelector(".carousel-3d-container"));
    });
  }
  // imageFocus() {
  //   this.container.addEventListener("mousemove", (e) => {
  //     if (e.pageX > this.directionX) {
  //       this.directionX = e.pageX;
  //       if (e.target.classList.contains("icebox__black")) {
  //         this.styleLeft = e.layerX * 2;
  //         this.zoomOut.style.left = `-${this.styleLeft}px`;
  //         console.log("box");
  //       } else {
  //         this.styleLeft = this.styleLeft + 2.5;
  //         this.zoomOut.style.left = `-${this.styleLeft}px`;
  //         console.log("children");
  //       }
  //     } else {
  //       this.directionX = e.pageX;
  //       if (e.target.classList.contains("icebox__black")) {
  //         this.styleLeft = e.layerX * 2;
  //         this.zoomOut.style.left = `-${this.styleLeft}px`;
  //       } else {
  //         this.styleLeft = this.styleLeft - 50;
  //         this.zoomOut.style.left = `-${this.styleLeft}px`;
  //       }
  //     }

  //     if (e.pageY < this.directionY) {
  //       this.directionY = e.pageY;
  //       // console.log("top");
  //       // this.zoomOut.style.top = `-${e.layerY * 2.8}px`;
  //     } else {
  //       this.directionY = e.pageY;
  //       // this.zoomOut.style.top = `-${e.layerY * 2.8}px`;
  //       // console.log("bottom");
  //     }
  //     // this.zoomOut.style.left = `-${event.layerX * 2}px`;
  //     // if (event.layerY > 300) {
  //     //   this.zoomOut.style.top = `-${event.layerY * 2.8}px`;
  //     // } else {
  //     //   this.zoomOut.style.top = `-${event.layerY * 2.5}px`;
  //     // }
  //   });
  //   // ref.addEventListener("mousemove", (event) => {
  //   //   //   console.log(event.x);
  //   //   img.style.left = `-${event.x}px`;
  //   //   img.style.top = `-${event.y * 2.5}px`;
  //   // });
  // }
}

// let imageZoom = "hi";

export default imageZoom;
