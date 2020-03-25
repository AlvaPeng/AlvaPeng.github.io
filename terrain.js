// 随机地形 按一定条件设置起始点

var container;

var camera, controls, scene, renderer;

var ground_mesh, texture;

// 地形尺寸
var worldWidth = 32, worldDepth = 32,
	worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

var raycaster = new THREE.Raycaster();
var pointer;
var marker;
var mouse = new THREE.Vector2();

var clock = new THREE.Clock();

var params = {
exposure: 1,
bloomStrength:  0.4,
bloomThreshold: 0,
bloomRadius: 0
};

init();
animate();

function init() {
	container = document.getElementById( 'container' );
	container.innerHTML = "";

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );
	scene.fog = new THREE.Fog(0x000000, 500,6000);

	var group = new THREE.Group();

	var data = generateHeight( worldWidth, worldDepth );

	camera.position.y = data[ worldHalfWidth + worldHalfDepth * worldWidth ] * 10 + 500;
	// cam 初始位置：中心数据*10+500

	var ground_geo = new THREE.PlaneBufferGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
	ground_geo.rotateX( - Math.PI / 2 );

	var vertices = ground_geo.attributes.position.array;
	// 512*512 个位置的 x,y,z 信息

	for ( let i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {

		vertices[ j + 1 ] = data[ i ] * 10;
		// 点[i] 的 y轴坐标值被赋值为 data[i]
	}

	ground_geo.computeFaceNormals();

	var ground_mat = new THREE.MeshStandardMaterial({
	    color:0x565656,
		metalness: 0,
        roughness: 0.8,
	    flatShading:true,
	});

	ground_mesh = new THREE.Mesh( ground_geo, ground_mat );

	scene.add( ground_mesh );

	var target = new THREE.Mesh( new THREE.OctahedronGeometry(10,1), new THREE.MeshStandardMaterial() );
	target.position.y = 0;
	target.position.x = 10;

	scene.add(target);

	var light_1 = new THREE.DirectionalLight( 0x1fd5ff, 1 );
	var light_2 = new THREE.DirectionalLight( 0xff4db7, 1 );

	light_1.target = target;
	scene.add( light_1 );
	scene.add( light_2 );
	// group.layers.set(0);

	// 鼠标控制的标记
	var pointer_geo = new THREE.SphereGeometry(20,64,64);
	var pointer_mat = new THREE.MeshBasicMaterial( {
		color: 0x00ff00
	} );

	pointer = new THREE.Mesh( pointer_geo, pointer_mat );
	pointer.position.y = 1000;
	scene.add( pointer );

	var marker_geo = new THREE.CylinderGeometry( 20, 20, 5000, 32 );
	var marker_mat = new THREE.MeshBasicMaterial( {
		color: 0x00ff00,
		transparent: true,
		opacity:0.4
	} );
	marker = new THREE.Mesh( marker_geo, marker_mat );
	marker.position.y = -2500;
	scene.add( marker );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.autoClear = false;
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.gammaInput = true
	renderer.gammaOutput = true
	container.appendChild( renderer.domElement );

	var renderScene = new THREE.RenderPass( scene, camera );

	var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
	bloomPass.threshold = params.bloomThreshold;
	bloomPass.strength = params.bloomStrength;
	bloomPass.radius = params.bloomRadius;

	composer = new THREE.EffectComposer( renderer );
	composer.setSize( window.innerWidth, window.innerHeight )
	composer.addPass( renderScene );
	composer.addPass( bloomPass );

	controls = new THREE.OrbitControls(camera,renderer.domElement);
    controls.enableDamping = true; //设置阻尼效果
    controls.dampingFactor = 0.05;
	controls.minPolarAngle = 0;
	controls.maxPolarAngle = 0.45*Math.PI;

	container.addEventListener( 'mousemove', onMouseMove, false );
	container.addEventListener( 'click', onMouseClick, false );

	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}



function onMouseMove( event ) {
	mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );

	// See if the ray from the camera into the world hits one of our meshes
	var intersects = raycaster.intersectObject( ground_mesh );
	// Toggle rotation bool for meshes that we clicked
	if ( intersects.length > 0 ) {
		pointer.position.copy( intersects[ 0 ].point );
		pointer.position.add(new THREE.Vector3(0,20,0));
	}
}

// 随机生成高度值
function generateHeight( width, height ) {

	var size = width * height, data = new Uint8Array( size ),
		perlin = new THREE.ImprovedNoise(), quality = 10, z = 0;

	for ( let j = 0; j < 2; j ++ ) {

		for ( let i = 0; i < size; i ++ ) {

			let x = i % width, y = ~ ~ ( i / width ); //横坐标和纵坐标
			data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 10 );
		}

		quality *= 0.5;
	}

	return data;

}


var y_index;
var grow_anim;

function onMouseClick( event ) {
	if (grow_anim) {
		window.cancelAnimationFrame(grow_anim)
	}
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObject( ground_mesh );
	if ( intersects.length > 0 ) {
		marker.position.copy( intersects[ 0 ].point );
		console.log(intersects[0].point.y)
		y_index = 0;
		grow(marker);
	}
}


function grow(){
	grow_anim = requestAnimationFrame( grow );
	if(y_index < 250){
		marker.position.y = -2500 + 10*y_index;
		y_index += 10;
	}
}


function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
    // renderer.clear();

    renderer.render(scene, camera);
    // renderer.clearDepth();

    // composer.render();
}
