import express from 'express';
import { Request, Response } from 'express';
import { Server } from "socket.io";
import http from 'http';
import routes from './routes';


const port = 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/', routes);
app.get('/client', (req: Request, res: Response) => res.sendFile("public/index.html", { root: "." }));

io.on('connection', (socket) => {
    console.log('a user connected');
  });

server.listen(port, () => {console.log(`Server listening on port ${port}`)});