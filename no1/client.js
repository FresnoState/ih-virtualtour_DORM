// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Location, Surface} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";



function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        cursorVisibility: "visible",
        ...options,
    });

    const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
    leftPanel.setAngle(-0.6, 0);
    const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
    rightPanel.setAngle(0.6, 0);
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
    /*r360.renderToLocation(
        r360.createRoot('model'),
        new Location([0,-2,-10]),
    );*/

    // Load the initial environment

    // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
