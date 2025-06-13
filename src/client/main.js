import * as mth from "./mth/mth.ts";
import * as time from "./anim/timer.ts";

let socket;

function main() {
    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = '/';
    }

    window.addEventListener("load", function () {
        socket = io();

        socket.on("connect", () => {
            console.log("Connected with ID:", socket.id);
            socket.emit('setUsername', username);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected:", socket.id);
        });
        
    });
    time.timerInit();
    time.timerResponse();
    console.log(time.getTimeContext());
    console.log(mth.degreesToRadians(180));
}

main();