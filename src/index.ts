import express, { Express, Request, Response } from 'express';
import serverConfig from './config/server.config';
import Todo from './models/todo';
import ApiResponse from './common/response';
import apiRouter from './routes/api.router';
const app: Express = express();

app.use('/api', apiRouter);

app.get('/ping', (req: Request, res: Response) => {
    return res.json({message: 'ok'});
});

// app.get('/todo/:id', (req: Request, res: Response) => {
//     const id: string = req.params.id;
//     const todo: Todo = {
//         id: Number(id),
//         task: 'something',
//         completed: false
//     };
//     const response: ApiResponse = {
//         success: true,
//         error: {},
//         data: todo,
//         message: 'Fetched todo'
//     }
//     return res.json(response);
// })

app.listen(serverConfig.PORT, () => {
    console.log(`Server started on port: ${serverConfig.PORT}`);
})