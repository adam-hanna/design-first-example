import { Router } from 'express';

// Middlewares
import TasksShowMiddleware from '../../middleware/tasks/show';
import TasksListMiddleware from '../../middleware/tasks/list';

// Handlers
import TasksListHandler from './tasks/list';
import TasksShowHandler from './tasks/show';

const router: Router = Router();
router.get('/tasks', TasksListMiddleware, TasksListHandler);
router.get('/tasks/:id', TasksShowMiddleware, TasksShowHandler);

export default router
