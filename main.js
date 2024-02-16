let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

const mtlLoader = new MTLLoader();
mtlLoader.loadMtl('bf748742-8378-4fe3-987c-72f9c87012d3.mtl', (mtl) => {
  mtl.preload();
  mtl.materials.Material.side = THREE.DoubleSide;
  objLoader.setMaterials(mtl);
  objLoader.load('bf748742-8378-4fe3-987c-72f9c87012d3.obj', (event) => {
    const root = event.detail.loaderRootNode;
    scene.add(root);
    ...
  });
});