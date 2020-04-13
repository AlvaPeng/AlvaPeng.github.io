let e = ele => document.querySelector(ele)

var SCREEN_WIDTH = window.innerWidth*0.7;
var SCREEN_HEIGHT = window.innerHeight*0.7;

var container;
var camera, scene, renderer;

var loader, mixer;

var sphere, sphere1, sphere2;
var speed = 1;

var clock = new THREE.Clock();

init();

function init(){
    container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0,0,250 );

    loadScene();
    loadBalls();
    // loadMonkey();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container.appendChild( renderer.domElement );

    // controls
    controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    animate();
}

function loadBalls(){
    var geometry = new THREE.SphereGeometry( 3, 32, 32 );
    var material = new THREE.MeshStandardMaterial({
	    color:0x7782ed,
		metalness: 0,
        roughness: 0.8,
	    flatShading:true,
	});
    sphere = new THREE.Mesh( geometry, material );
    sphere.position.y = 10;
    scene.add( sphere );

    var geometry = new THREE.SphereGeometry( 3, 32, 32 );
    var material = new THREE.MeshStandardMaterial({
	    color:0x6fd5dd,
		metalness: 0,
        roughness: 0.8,
	    flatShading:true,
	});
    sphere1 = new THREE.Mesh( geometry, material );
    sphere1.position.y = 25;
    scene.add( sphere1 );

    var geometry = new THREE.SphereGeometry( 3, 32, 32 );
    var material = new THREE.MeshStandardMaterial({
	    color:0xc88fff,
		metalness: 0,
        roughness: 0.8,
	    flatShading:true,
	});
    sphere2 = new THREE.Mesh( geometry, material );
    sphere2.position.y = 50;
    scene.add( sphere2 );
}

function loadScene(){
    scene = new THREE.Scene();

    var light = new THREE.HemisphereLight( 0xffffff, 0xffffff );
	scene.add( light );

    var light = new THREE.SpotLight();
	light.angle = Math.PI;
	light.penumbra = 0.2; //光影交界处的半影
	light.castShadow = true;
	light.position.set( 0,0,0 );
	scene.add( light );
}

function loadMonkey(){
    loader = new THREE.GLTFLoader();
    loader.load(
	'assets/monkey.glb',
    	function ( gltf ) {

            scene.add( gltf.scene );
            mixer = new THREE.AnimationMixer( gltf.scene );
        	var action = mixer.clipAction( gltf.animations[ 0 ] );
            action.play();

    	},
    	function ( error ) {

    		console.log( 'An error happened' );

    	}
    );
}
var t = 0;
function animate(){
    requestAnimationFrame( animate );

    t += 0.05;
    var radius = 10;
    var radius1 = 25;
    var radius2 = 50;

    sphere.position.x = radius*Math.cos(speed*t);
    sphere.position.y = radius*Math.sin(speed*t);

    sphere1.position.x = radius1*Math.cos(speed*t*0.7);
    sphere1.position.y = radius1*Math.sin(speed*t*0.7);

    sphere2.position.x = radius2*Math.cos(speed*t*0.5);
    sphere2.position.y = radius2*Math.sin(speed*t*0.5);

    // sphere1.position.x += 0.1;

    // var delta = clock.getDelta();
	// mixer.update( delta );
    controls.update();
    renderer.render( scene, camera );
}

let registerBindSliders = () => {
    let slider = e('#speed')
    // 捕捉结束的瞬间用 change。 随时监听用 input
    slider.addEventListener("change", (event) => {
        let value = event.target.value
        speed = value;
    })
}

let main = () => {
    registerBindSliders()
}

main()
