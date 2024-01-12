import express, { Express, Request, Response } from 'express';
import serverConfig from './config/server.config';
import Todo from './models/todo';
import ApiResponse from './common/response';
const app: Express = express();

app.get('/ping', (req: Request, res: Response) => {
    return res.json({message: 'ok'});
});

app.get('/todo/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const todo: Todo = {
        id: Number(id),
        task: 'something',
        completed: false
    };
    const response: ApiResponse = {
        success: true,
        error: {},
        data: todo,
        message: 'Fetched todo'
    }
    return res.json(response);
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server started on port: ${serverConfig.PORT}`);
})