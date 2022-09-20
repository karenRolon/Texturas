//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33C1FF); 
scene.fog = new THREE.Fog(0x76456c, 0.1, 8);

var loader = new  THREE.TextureLoader();
loader.load(
    '../imagenes/OIP.jpg', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0x33C1FF} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//animacion
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();