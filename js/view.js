const query = new URLSearchParams(location.search);
var viewSocket;

function ping(socket) {
    if (socket != viewSocket) return;
    socket.send("ping");
    setTimeout(ping.bind(null, socket), 30000);
}

function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createTable(parent) {
    var table = document.createElement("table");
    var br = document.createElement("br");
    parent.appendChild(table);
    parent.appendChild(br);
    return table;
}

function createRow(table) {
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    table.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    return row;
}

function setRow(row, name, score) {
    row.firstChild.textContent = name;
    row.lastChild.textContent = score;
}

function createDiv(parent) {
    var div = document.createElement("div");
    parent.appendChild(div);
    return div;
}

function addLinks() {
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("link");
    var font = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "style.css";
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800";
    head.appendChild(style);
    head.appendChild(font);
}

function connectDisplay() {
    const ip = "beat-saber-team-scores.herokuapp.com";
    var style = query.get("style");
    var teams = query.get("teams");

    if (teams) {
        teams = teams.split(",");
    }

    viewSocket = new WebSocket(`wss://${ip}`);
    // viewSocket = new WebSocket(`ws://localhost:6558`);

    viewSocket.addEventListener("open", () => {
        console.log("joined view");
    });

    viewSocket.addEventListener("message", (message) => {
        var view = document.getElementById("view");
        clear(view);
        var scores = JSON.parse(message.data);
        for (var team in scores) {
            if (teams && !teams.includes(team)) continue;
            var total = 0;
            for (var user in scores[team]) {
                total += scores[team][user];
            }
            if (style === "team-score-only") {
                addLinks();
                var div = createDiv(view);
                div.textContent = total;
                div.id = "teamScore";
                continue;
            }
            var table = createTable(view);
            var header = createRow(table);
            for (var user in scores[team]) {
                var score = scores[team][user];
                var row = createRow(table);
                setRow(row, user, score);
            };
            setRow(header, team, total);
        };
    });

    viewSocket.addEventListener("close", () => {
        console.log("view disconnected, retrying in 3 seconds");
		setTimeout(connectDisplay, 3000);
    });

    setTimeout(ping.bind(null, viewSocket), 30000);
}

connectDisplay();
