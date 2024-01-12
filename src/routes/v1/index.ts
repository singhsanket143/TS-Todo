import express, { Router } from 'express';
import todoRouter from './todo.routes';

const v1Router: Router = express.Router()

v1Router.use('/todos', todoRouter);

export default v1Router;