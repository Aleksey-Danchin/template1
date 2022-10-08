import app from "./app";
import https from "https";
import { readFileSync } from "fs";

(async () => {
	https
		.createServer(
			{
				key: readFileSync("./.cert/key.pem"),
				cert: readFileSync("./.cert/cert.pem"),
			},
			app
		)
		.listen(443, () => console.log("Server start on 443 port."));
})();
