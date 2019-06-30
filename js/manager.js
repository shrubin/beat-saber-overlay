var scoreToSend = 0;
var lastScore = -1;
function sendTeamScore() {
	if (scoreToSend != lastScore) {
		teamSocket.send(scoreToSend);
		lastScore = scoreToSend;
	}
	setTimeout(sendTeamScore, 1000);
}

function connect() {
	var ip = query.get("ip") || "localhost";
	var port = query.get("port") || 6557;

	var socket = new WebSocket(`ws://${ip}:${port}/socket`);

	socket.addEventListener("open", () => {
		console.log("WebSocket opened");
	});

	socket.addEventListener("message", (message) => {
		var data = JSON.parse(message.data);
		var event = events[data.event];

		if (event) {
			event(data.status, data.time);
		}
		scoreToSend = data.status.performance.score;
	});

	socket.addEventListener("close", () => {
		console.log("Failed to connect to server, retrying in 3 seconds");
		setTimeout(connect, 3000);
	});

	if (query.has("team") && query.has("user")) {
		sendTeamScore();
	}
}

connect();