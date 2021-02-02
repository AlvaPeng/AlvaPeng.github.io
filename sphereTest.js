var container,
  renderer,
  scene,
  camera,
  mesh,
  controls,
  start = Date.now(),
  fov = 30;

window.addEventListener( 'load', function() {

  // grab the container from the DOM
  container = document.getElementById( "sphere_test" );

  // create a scene
  scene = new THREE.Scene();

  // create a camera the size of the browser window
  // and place it 100 units away, looking towards the center of the scene
  camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 100;

  // create a wireframe material
  material = new THREE.ShaderMaterial( {
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  } );

  // create a sphere and assign the material
  mesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry( 20, 4 ),
    material
  );
  scene.add( mesh );

  // create the renderer and attach it to the DOM
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );

  container.appendChild( renderer.domElement );

  controls = new THREE.OrbitControls( camera, renderer.domElement );

  render();

} );

function render() {

  // let there be light
  renderer.render( scene, camera );
  requestAnimationFrame( render );
  controls.update();
}