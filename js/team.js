var teamSocket;

function ping(socket) {
	socket.send('ping');
	setTimeout(ping.bind(null, socket), 30000);
}

function connectTeam() {
	const ip = "beat-saber-team-scores.herokuapp.com";
	var team = query.get("team");
	var user = query.get("user");

	if (!team || !user) return;

	teamSocket = new WebSocket(`wss://${ip}/${team}/${user}`);

	teamSocket.addEventListener("open", () => {
		console.log("joined team");
	});

	teamSocket.addEventListener("message", (message) => {
		ui.teamScore(message.data);
	});

	teamSocket.addEventListener("close", () => {
		console.log("left team");
	});

	ui.showTeamScore();

	setTimeout(ping.bind(null, teamSocket), 30000);
}

connectTeam();