import express, {json, urlencoded} from "express";
import config from "./config";
import * as http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(json());
app.use(urlencoded());

app.get('/', (req, res) => {
    res.json({
        hello: "world"
    });
});

io.on('connection', socket => {
    console.log(`Client ${socket.conn.remoteAddress} connected.`)

    socket.on('disconnect', reason => {
        console.log(`Client ${socket.conn.remoteAddress} disconnected. ${reason}`);
    })
});

server.listen(config.port, () => {
    console.log(`Server is listening at: ${config.port}`);
})

export default app;
