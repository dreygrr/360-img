export const addPanolens = () => {
    const panoramaImage = new PANOLENS.ImagePanorama("../../img/teste-2.png");
    const imageContainer = document.querySelector(".landing .img-container");
    
    const viewer = new PANOLENS.Viewer({
      container: imageContainer,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      controlBar: false,
    });
    
    viewer.add(panoramaImage);
}
