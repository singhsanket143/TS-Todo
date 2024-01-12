import express, { Express, Request, Response } from 'express';
import serverConfig from './config/server.config';
const app: Express = express();

app.get('/ping', (req: Request, res: Response) => {
    return res.json({message: 'ok'});
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server started on port: ${serverConfig.PORT}`);
})