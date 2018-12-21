// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"


import {ReactInstance,Location, Surface,Module} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";
const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
leftPanel.setAngle(-0.23, 0);//-.23
const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
rightPanel.setAngle(0.0, 0.0);

const hs_atrium_1 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_atrium_1.setAngle(-1.0,0.0);

const hs_suite_1 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_1.setAngle(3.0,0.0);

const hs_suite_2 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_2.setAngle(-1.4,0.0);
class MyModule extends Module {
    constructor() {
        super('MyModule'); // Makes this module available at NativeModules.MyModule
    }

    // This method will be exposed to the React app
    add_atrium_hs_1() {
        hs_atrium_1.resize(300,300);
    }
    remove_atrium_hs_1(){
        hs_atrium_1.resize(1,1);
    }
    add_suite_hs_1() {
        hs_suite_1.resize(300,300);
    }
    remove_suite_hs_1(){
        hs_suite_1.resize(1,1);
    }
    add_suite_hs_2() {
        hs_suite_2.resize(300,300);
    }
    remove_suite_hs_2(){
        hs_suite_2.resize(1,1);
    }
}



function init(bundle, parent, options = {}) {
   // this.camera = options.camera || null;
   // console.log(ReactInstance.camera());
    //this.camera = new THREE.PerspectiveCamera(80,,0.01,10000.0)
    //THREE.PerspectiveCamera.fov = 120;
    //console.log(THREE.PerspectiveCamera.getEffectiveFOV());
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        nativeModules: [
            new MyModule(),
        ],
        fullScreen: true,
        cursorVisibility: "visible",
        ...options,
    });






    /*  r360.renderToSurface(
          r360.createRoot('TopPosts'),
          leftPanel,
      );
      r360.renderToSurface(
          r360.createRoot('CurrentPost'),
          rightPanel,
      );*/
    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('menu', { /* initial props */ }),
        leftPanel,
    );

    r360.renderToSurface(
        r360.createRoot('infoBoard',{}),
        rightPanel,
    );


    r360.renderToLocation(
        r360.createRoot('model'),
        new Location([0,-2,-4]),
    );
    r360.renderToLocation(
        r360.createRoot('platform'),
        new Location([-1/5,-2,-4]),
    );

    r360.renderToSurface(
        r360.createRoot('Atrium_hs_1',{}),
        hs_atrium_1,
    );

    r360.renderToSurface(
        r360.createRoot('Suite_hs_1',{}),
        hs_suite_1,
    );

    r360.renderToSurface(
        r360.createRoot('Suite_hs_2',{}),
        hs_suite_2,
    );



    // Load the initial environment

    // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
