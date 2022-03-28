// ==UserScript==
// @name          ~~Project Infinite~~
// @namespace    
// @version      1.11
// @description  This is a script that modifies MooMoo.io!
// @author       ~~MysticalCookie & W4IT~~
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://*.moomoo.io/*
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js
// @grant        none
// @license     N/A
// ==/UserScript==
 
setInterval(() => window.follmoo && follmoo(), 10);//Starter resources
var spikeType;
document.getElementById('gameName').innerHTML = '~~Project Infinite~~';
document.getElementById('loadingText').innerHTML = ' ~~Project Infinite Loading~~... ';
document.getElementById('diedText').innerHTML = "!! They will die soon!!";
document.getElementById('diedText').style.color = "#fe3200";
document.title = ' Project Infinite ';
document.getElementById("leaderboard").append ('Project Infinite');
document.getElementById("storeHolder").style = "height: 1000px; width: 485px;"; //Bigger store
document.querySelector("#pre-content-container").remove();
document.getElementById("enterGame").addEventListener('click', autohide);
function autohide(){
    $("#ot-sdk-btn-floating").hide();
var autoreloadloop;
var autoreloadenough = 0;
 
autoreloadloop = setInterval(function () {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "Disconnected? NP";
            clearInterval(autoreloadloop);
            setTimeout(function () {document.title = "Moo Moo";}, 1000);
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "MOOMOO.IO";
        setTimeout(function () {document.title = "Moo Moo";}, 1000);
    }
}, 50);
    var f = 26;
    for (; f < 29; f++) {
        if (isElementVisible(document['getElementById']('actionBarItem' + f['toString']()))) {
            millType = f - 16;
        }
    }
function Hat (id){
    storeBuy(id);
    storeEquip(id);
}
 
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && document.activeElement.id.toLowerCase() !== 'chatbox') { // ESC for Unequip
        Hat(0);
    }
    if (e.keyCode == 66 && document.activeElement.id.toLowerCase() !== 'chatbox') { // B for Soldier
        Hat(6);
    }
    if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') { // G for Turret gear
        Hat(53);
    }
    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') { // SHIFT for booster hat
        Hat(12);
    }
    if (e.keyCode == 188 && document.activeElement.id.toLowerCase() !== 'chatbox') { // "," for snow hat
        Hat(15);
    }
    if (e.keyCode == 60 && document.activeElement.id.toLowerCase() !== 'chatbox') { // < for flipper hat
        Hat(31);
    }
    if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') { // Z for tank gear
        Hat(40);
    }
    if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') { // J for emp helmet
        Hat(22);
    }
    if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') { // T for samurai
        Hat(20);
    }
    if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') { // Y for Bull Helmet
        Hat(7);
    }
});
var millType;
    if(automillx == false){
        automillx = myPlayer.x;
    }
    if(automilly == false){
        automilly = myPlayer.y;
    }
    if(myPlayeroldy != myPlayer.y || myPlayeroldx != myPlayer.x){
        if (walkmillhaha==true) {
            if(Math.sqrt(Math.pow((myPlayer.y-automilly), 2) + Math.pow((myPlayer.x-automillx), 2)) > 100) {
                place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) + toRad(78));
                place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) - toRad(78));
                place(millType, Math.atan2(myPlayeroldy - myPlayer.y, myPlayeroldx - myPlayer.x) - toRad(0));
                newSend(["2", [Math.atan2(mouseY - height / 2, mouseX - width / 2)]]);
                automillx = myPlayer.x;
                automilly = myPlayer.y;
            }
        }
        myPlayeroldx = myPlayer.x;
        myPlayeroldy = myPlayer.y;
    }
    if(token == "6"){
        for(let i = 0; i < node[1].length / 8; i++){
            let ObjectData = node[1].slice(8*i, 8*i+8);
            if(ObjectData[6] == 15 && ObjectData[7] != myPlayer.id && ObjectData[7] != myPlayer.clan){
                trap_a = Math.atan2(ObjectData[2] - myPlayer.y, ObjectData[1] - myPlayer.x);
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 90){
                    intrap = true;
                    trapid = ObjectData[0];
                    if(antitrap == true) {
                        if (palcetraps == true) {
                            for (let i=0;i<10;i++){
                                let angle = myPlayer.dir + toRad(i * 16);
                                place(boostType, angle);
                            }
                        } else if (palcespikes == true) {
                            for (let i=0;i<10;i++){
                                let angle = myPlayer.dir + toRad(i * 16);
                                place(spikeType, angle);
                            }
                        } else if(palcemills == true){
                            for (let i=0;i<10;i++){
                                let angle = myPlayer.dir + toRad(i * 16);
                                place(millType, angle);
                            }
                        }
                    }
                }
            }
        }
    }
//This mod is really good, right? Also! Why are you looking at the code? Are you copying me?
    if (a.keyCode == 79 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        var b = 0;
        for (; b < 5; b++) {
            var groupY = myPlayer.dir + toRad(b * 72);
            place(millType, groupY);
        }
    }
 setTimeout( () => {
                newSend(["6", [4]]);//katana
            }, 35);
 
            setTimeout( () => {
                newSend(["6", [15]]);//musket
                autosecondary = true;
                newSend(["5", [secondary, true]]);
                newSend(["13c", [1, 53, 0]]);
                newSend(["13c", [0, 53, 0]]);
            }, 50);
//Katana And Musket Above
if(a.keyCode == 46 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        newSend(["6", [4]]);
        newSend(["15", [15]]);
}
if (a.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {//reverse insta
        autoprimary = false;
        autosecondary = true;
        autoaim = true;
        doinsta = true;
        newSend(["13c", [0, 0, 1]]);
        newSend(["5", [secondary, true]]);
        newSend(["7", [1]]);
        newSend(["13c", [1, 53, 0]]);
        newSend(["13c", [0, 53, 0]]);
        newSend(["13c", [1, 21, 1]]);
        newSend(["13c", [0, 21, 1]]);
        setTimeout( () => {
            autoprimary = true;
            autosecondary = false;
            newSend(["13c", [1, 7, 0]]);
            newSend(["13c", [0, 7, 0]]);
            newSend(["13c", [0, 21, 1]]);
            newSend(["5", [primary, true]]);
        }, 40);
}
 if (a.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
     newSend(["ch", ['Console Insta! Log!']]);
        Hat(7);
        acc(21);
        setTimeout( () => {
            place(spikeType, myPlayer.dir + toRad(45));
            place(spikeType, myPlayer.dir - toRad(45));
        }, 40);
        setTimeout( () => {
            Hat(53);
        }, 50);
 }
    if (a.keyCode == 78 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        walkmillhaha = !walkmillhaha;
        newSend(["ch", ["Mills : " + walkmillhaha]]);
    }
const CanvasAPI = document.getElementById("gameCanvas")
CanvasAPI.addEventListener("mousedown", buttonPressD, false);
//2 - right
//1 - scroll wheel
//0 - left
function buttonPressD(e) {
    if (document.getElementById("click").checked) {
        if (e.button == 2) {
            if(secondary == 10){
                newSend(["5", [secondary, true]]);
            }
            hat(40);
            acc(21);
            newSend(["7", [1]]);
            setTimeout( () => {
                if(secondary == 10){
                    newSend(["5", [primary, true]]);
                }
                acc(11);
                if (myPlayer.y < 2400) {
                    hat(15);
                } else {
                    if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                        hat(31);
                    } else {
                        hat(12);
                    }
                }
                newSend(["7", [1]]);
            }, 100);
        }
    }
}
let mouseX;
let mouseY;
let width;
let height;
function aim(x, y){
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y
    }));
}
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");
var foodType;
var ws;
var msgpack5 = msgpack;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};
let healSpeed = 100;
let healToggle = 1;
document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;
        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}
function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};
    if(item === "io-init") {
        let cvs = document.getElementById("gameCanvas");
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function() {
            width = cvs.clientWidth;
            height = cvs.clientHeight;
        });
        cvs.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }
    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
    }
    if (item == '33') {
        for (let i; i < data[1].length / 13; i++) {
            var object = data[1].slice(13 * i, 13 * i + 13);
            if (object[0] == myPlayer.id) {
                myPlayer.x = object[1];
                myPlayer.y = object[2];
                myPlayer.dir = object[3];
                myPlayer.object = object[4];
                myPlayer.weapon = object[5];
                myPlayer.clan = object[7];
                myPlayer.isLeader = object[8];
                myPlayer.hat = object[9];
                myPlayer.accessory = object[10];
                myPlayer.isSkull = object[11];
            }
        }
    }
    if(data[2] < 100 && data[2] > 0) { 
    doNewSend(["13c",[1, 6, 0]]);
    doNewSend(["13c",[1, 21, 1]]);  
    acc(21);
    hat(6);
    place(foodType, null);  
    place(foodType, null);
    place(foodType, null);
    setTimeout( () => {
        if (myPlayer.y < 2400) { 
        doNewSend(["13c",[1, 15, 0]]);
        doNewSend(["13c",[0, 15, 0]]);
        doNewSend(["13c",[1, 11, 1]]);
        doNewSend(["13c",[0, 11, 1]]);
        }  else if (myPlayer.y < 6850) {
        doNewSend(["13c",[1, 31, 0]]);
        doNewSend(["13c",[0, 31, 0]]);
        doNewSend(["13c",[1, 11, 1]]);
        doNewSend(["13c",[0, 11, 1]]);
        } else {
        doNewSend(["13c",[1, 12, 0]]);
        doNewSend(["13c",[0, 12, 0]]);
        doNewSend(["13c",[1, 11, 1]]);
        doNewSend(["13c",[0, 11, 1]]);
        }
    }, 170);
        }
        }
    update();
}
function doNewSend(sender){
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));
}
function place(id) {
    doNewSend(["5", [id, null]]);
    doNewSend(['c', [1]]);
    doNewSend(['c', [0]]);
    doNewSend(['5', [myPlayer.weapon, true]]);
    doNewSend(["5", [id, null]]);
    doNewSend(['c', [1]]);
    doNewSend(['c', [0]]);
    doNewSend(['5', [myPlayer.weapon, true]]);
}
document.addEventListener('keydown', (e)=> {
    if(e.keyCode == 80 && document.activeElement.id.toLowerCase()!== 'chatbox') {
    	healToggle = (healToggle + 1) % 2;
        if(healToggle == 1) {
        	document.title = "Autoheal On";
        } else {
        	document.title = " AutoHeal: Off";
        }
    }
});
function isElementVisible(e) {
    return (e.offsetParent !== null);
}
function update() {
    for (let i=16;i<19;i++){
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))){
            foodType = i - 16;
        }
    }
}
