// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"


import {ReactInstance,Location, Surface,Module} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";

//const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
//leftPanel.setAngle(-0.23, 0);//-.23

//---- declare & define surfaces
const mainPanel = new Surface(800, 675, Surface.SurfaceShape.Flat);
mainPanel.setAngle(0.0, 0.0);
const closedPanel = new Surface(1, 1, Surface.SurfaceShape.Flat);
closedPanel.setAngle(0.0, 0.0);


const hs_atrium_1 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_atrium_1.setAngle(-1.0,0.0);
const hs_atrium_1_eye = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_atrium_1_eye.setAngle(-1.0,0.0);


const hs_atrium_2 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_atrium_2.setAngle(1.0,0.0);
const hs_atrium_2_eye = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_atrium_2_eye.setAngle(1.0,0.0);


const hs_comm_1 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_comm_1.setAngle(1.6,0.0);
const hs_comm_1_eye = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_comm_1_eye.setAngle(1.6,0);



const hs_suite_1 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_1.setAngle(3.1,0.0);
const hs_suite_1_eye = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_1_eye.setAngle(3.1,0.0);

const hs_suite_2 = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_2.setAngle(-1.9,0.0);
const hs_suite_2_eye = new Surface(1,1,Surface.SurfaceShape.Flat);
hs_suite_2_eye.setAngle(-1.9,0.0);



class MyModule extends Module {
    constructor() {
        super('MyModule'); // Makes this module available at NativeModules.MyModule
    }

    // These method will be exposed to the React app
    add_menu(){
        mainPanel.resize(800,600);
    }
    remove_menu(){
        mainPanel.resize(1,1);
    }

    add_closed_menu(){
        closedPanel.resize(300,300);
    }
    remove_closed_menu(){
        closedPanel.resize(1,1);
    }



    add_atrium_hs_1() {
        hs_atrium_1.resize(300,360);
    }
    remove_atrium_hs_1(){
        hs_atrium_1.resize(1,1);
    }

    add_atrium_hs_1_symb(){
        hs_atrium_1_eye.resize(300,300);
    }
    remove_atrium_hs_1_symb(){
        hs_atrium_1_eye.resize(1,1);
    }



    add_atrium_hs_2() {
        hs_atrium_2.resize(320,320);
    }
    remove_atrium_hs_2(){
        hs_atrium_2.resize(1,1);
    }

    add_atrium_hs_2_symb(){
        hs_atrium_2_eye.resize(324,300);
    }
    remove_atrium_hs_2_symb(){
        hs_atrium_2_eye.resize(1,1);
    }



    add_comm_hs_1(){
        hs_comm_1.resize(300,300);
    }
    remove_comm_hs_1(){
        hs_comm_1.resize(1,1);
    }

    add_comm_hs_1_symb(){
        hs_comm_1_eye.resize(300,300);
    }
    remove_comm_hs_1_symb(){
        hs_comm_1_eye.resize(1,1);
    }



    add_suite_hs_1(){
        hs_suite_1.resize(300,292);
    }
    remove_suite_hs_1(){
        hs_suite_1.resize(1,1);
    }

    add_suite_hs_1_symb(){
        hs_suite_1_eye.resize(330,300);
    }
    remove_suite_hs_1_symb(){
        hs_suite_1_eye.resize(1,1);
    }

    add_suite_hs_2(){
        hs_suite_2.resize(300,320);
    }
    remove_suite_hs_2(){
        hs_suite_2.resize(1,1);
    }

    add_suite_hs_2_symb(){
        hs_suite_2_eye.resize(340,300);
    }
    remove_suite_hs_2_symb(){
        hs_suite_2_eye.resize(1,1);
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
            new MyModule(), // NEED THIS TO DEFINE USE CLASS
        ],
        fullScreen: true,
        cursorVisibility: "visible",
        ...options,
    });

    // Render your app content to surface

    r360.renderToSurface(
        r360.createRoot('infoBoard',{}),
        mainPanel,
    );

    r360.renderToSurface(
        r360.createRoot('Closed_main',{}),
        closedPanel,
    );


    r360.renderToSurface(
        r360.createRoot('Atrium_hs_1',{}),
        hs_atrium_1,
    );

    r360.renderToSurface(
        r360.createRoot('Atrium_hs_1_symb',{}),
        hs_atrium_1_eye,
    );
    r360.renderToSurface(
        r360.createRoot('Atrium_hs_2_symb',{}),
        hs_atrium_2_eye,
    );
    r360.renderToSurface(
        r360.createRoot('Comm_hs_1',{}),
        hs_comm_1,
    );
    r360.renderToSurface(
        r360.createRoot('Comm_hs_1_symb',{}),
        hs_comm_1_eye,
    );

    r360.renderToSurface(
        r360.createRoot('Atrium_hs_2',{}),
        hs_atrium_2,
    );

    r360.renderToSurface(
        r360.createRoot('Suite_hs_1',{}),
        hs_suite_1,
    );
    r360.renderToSurface(
        r360.createRoot('Suite_hs_1_symb',{}),
        hs_suite_1_eye,
    );
    r360.renderToSurface(
        r360.createRoot('Suite_hs_2',{}),
        hs_suite_2,
    );
    r360.renderToSurface(
        r360.createRoot('Suite_hs_2_symb',{}),
        hs_suite_2_eye,
    );

    /*r360.renderToLocation(
   r360.createRoot('model'),
   new Location([0,-2,-4]),
);
r360.renderToLocation(
   r360.createRoot('platform'),
   new Location([-1/5,-2,-4]),
);
*/



    // Load the initial environment

    // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
