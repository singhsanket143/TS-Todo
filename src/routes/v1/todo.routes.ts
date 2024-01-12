import express, { Router, Request, Response } from 'express';

const todoRouter: Router = express.Router()

todoRouter.get('/:id', (req: Request, res: Response) => {
    return res.json({msg: 'ok'})
});

export default todoRouter;