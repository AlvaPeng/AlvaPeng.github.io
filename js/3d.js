var SCREEN_WIDTH = window.innerWidth*0.7;
var SCREEN_HEIGHT = window.innerHeight*0.7;

var container;
var camera, scene, renderer;

init();
animate();

function init(){
    container = document.getElementById('container');

    var loader = new THREE.GLTFLoader();

    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 150 );
    camera.position.set( 6,15,6 );
	scene = new THREE.Scene();

    //light
    var light = new THREE.HemisphereLight( 0x443333, 0x111122 );
	scene.add( light );

	var light = new THREE.SpotLight();
	light.angle = Math.PI / 16;
	light.penumbra = 0.5;
	light.castShadow = true;
	light.position.set( 0,20,0 );
	scene.add( light );

    var light = new THREE.SpotLight();
	light.angle = Math.PI / 16;
	light.penumbra = 0.5;
	light.castShadow = true;
	light.position.set( 0,20,20 );
	scene.add( light );

    var light = new THREE.SpotLight();
	light.angle = Math.PI / 2;
	light.penumbra = 0.5;
	light.castShadow = true;
	light.position.set( -20,0,0 );
	scene.add( light );

    loader.load(
	'assets/monkey.glb',
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container.appendChild( renderer.domElement );

    // controls
    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
}

function animate(){
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
