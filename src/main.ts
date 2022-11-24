/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

//let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('CalcToRoom18').subscribe(()=>{
        WA.nav.goToRoom("map18.json");

    })

    WA.room.onEnterLayer('CalcToRoom35').subscribe(()=>{
        WA.nav.goToRoom("35/map35.json");

    })

    WA.room.onEnterLayer('CalcToRoomB2C').subscribe(()=>{
        WA.nav.goToRoom("B2C/mapB2C.json");

    })

    WA.room.onEnterLayer('CalcToRoomB2G').subscribe(()=>{
        WA.nav.goToRoom("B2G/mapB2G.json");

    })

    WA.room.onEnterLayer('CalcToRoomB2E').subscribe(()=>{
        WA.nav.goToRoom("B2E/mapB2E.json");

    })

    WA.room.onEnterLayer('CalcToRoomCorp').subscribe(()=>{
        WA.nav.goToRoom("Corp/mapCorp.json");

    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

//function closePopup(){
//    if (currentPopup !== undefined) {
//        currentPopup.close();
//        currentPopup = undefined;
//    }
//}

export {};
