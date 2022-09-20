//escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33C1FF); 



var loader = new  THREE.TextureLoader();
loader.load(
    '../', function(texture){
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

const geometry = new THREE.CylinderGeometry( 5, 5, 15, 32 );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../texturas/luna.jpg');

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

//line
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.z = 50;


/*var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 3;
control.maxDistance = 10;
*/


//pointerLockControls
const control = new THREE.PointerLockControls( camera, renderer.domElement)
document.getElementById('btnplay').onclick = () => {
    control.lock();
};

//Dragcontrols
const controls = new THREE.DragControls([cylinder], camera, renderer.domElement)

//animacion
function animate() {
    requestAnimationFrame( animate );
    cylinder.rotation.x += 0.10;
    cylinder.rotation.y += 0.01;
	cylinder.rotation.z += 0.01;
    line.rotation.x += 0.10;
    line.rotation.y += 0.01;
	line.rotation.z += 0.01;
    renderer.render( scene, camera );
}
animate();