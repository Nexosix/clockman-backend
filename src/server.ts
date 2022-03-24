import express from 'express';
import { Request, Response } from 'express';

const port = 5000;
const app = express();

app.get('/', (req: Request, res: Response) => res.send('Hello'));

app.listen(port, () => {console.log(`Server listening on port ${port}`)});