/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer("roofZone").subscribe(() => {
        WA.room.hideLayer("Roof/Roof1");
        WA.room.hideLayer("Roof/Roof2");
        WA.room.hideLayer("Roof/Roof3");
        WA.room.hideLayer("Roof/Roof4");
    });

    WA.room.onLeaveLayer("roofZone").subscribe(() => {
        WA.room.showLayer("Roof/Roof1");
        WA.room.showLayer("Roof/Roof2");
        WA.room.showLayer("Roof/Roof3");
        WA.room.showLayer("Roof/Roof4");
    });

    WA.room.area.onEnter("courses").subscribe(() => {
        console.log('onEnter courses');
        WA.nav.goToRoom("#sessionCourse");
        WA.ui.modal.openModal({
            title: "WorkAdventure website",
            src: 'https://workadventu.re',
            allow: "fullscreen",
            allowApi: true,
            position: "center"
        });
    });   

    WA.room.area.onLeave("courses").subscribe(() => {
        console.log('onLeave courses');
    });   
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
