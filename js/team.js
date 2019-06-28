var teamSocket;

function ping(socket) {
	if (socket !== teamSocket) return;
	socket.send('ping');
	setTimeout(ping.bind(null, socket), 30000);
}

function connectTeam() {
	const ip = "beat-saber-team-scores.herokuapp.com";
	var team = query.get("team");
	var user = query.get("user");
	var hide = query.has("hide");

	if (!team || !user) return;

	teamSocket = new WebSocket(`wss://${ip}/${team}/${user}`);
	// teamSocket = new WebSocket(`ws://localhost:6558/${team}/${user}`);

	teamSocket.addEventListener("open", () => {
		console.log("joined team");
	});

	if (!hide) {
		teamSocket.addEventListener("message", (message) => {
			ui.teamScore(message.data);
		});
		ui.showTeamScore();
	}

	teamSocket.addEventListener("close", () => {
		console.log("team disconnected, retrying in 3 seconds");
		setTimeout(connectTeam, 3000);
	});

	setTimeout(ping.bind(null, teamSocket), 30000);
}

connectTeam();
