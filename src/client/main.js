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
}

main();