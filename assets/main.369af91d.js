import{b as r}from"./init.278044ea.js";console.log("Script started successfully");WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("CalcToRoom18").subscribe(()=>{WA.nav.goToRoom("map18.json")}),WA.room.onEnterLayer("CalcToRoom35").subscribe(()=>{WA.nav.goToRoom("35/map35.json")}),WA.room.onEnterLayer("CalcToRoomB2C").subscribe(()=>{WA.nav.goToRoom("B2C/mapB2C.json")}),WA.room.onEnterLayer("CalcToRoomB2G").subscribe(()=>{WA.nav.goToRoom("B2G/mapB2G.json")}),WA.room.onEnterLayer("CalcToRoomB2E").subscribe(()=>{WA.nav.goToRoom("B2E/mapB2E.json")}),WA.room.onEnterLayer("CalcToRoomCorp").subscribe(()=>{WA.nav.goToRoom("Corp/mapCorp.json")}),r().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o))}).catch(o=>console.error(o));
