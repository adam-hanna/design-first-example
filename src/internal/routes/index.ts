import { Router } from 'express';

// Middlewares
import DefaultAppMiddleware from '../../middleware/app';
import AuthLoginMiddleware from '../../middleware/auth/login';
import AuthLogoutMiddleware from '../../middleware/auth/logout';
import AuthRegisterMiddleware from '../../middleware/auth/register';
import TasksShowMiddleware from '../../middleware/tasks/show';
import TasksListMiddleware from '../../middleware/tasks/list';
import TasksCreateMiddleware from '../../middleware/tasks/create';
import TasksDeleteMiddleware from '../../middleware/tasks/delete';

// Handlers
import AuthLoginHandler from './auth/login';
import AuthLogoutHandler from './auth/logout';
import AuthRegisterHandler from './auth/register';
import TasksListHandler from './tasks/list';
import TasksShowHandler from './tasks/show';
import TasksCreateHandler from './tasks/create';
import TasksDeleteHandler from './tasks/delete';

const router: Router = Router();
router.post('/auth/login', DefaultAppMiddleware, AuthLoginMiddleware, AuthLoginHandler);
router.get('/auth/logout', DefaultAppMiddleware, AuthLogoutMiddleware, AuthLogoutHandler);
router.post('/auth/register', DefaultAppMiddleware, AuthRegisterMiddleware, AuthRegisterHandler);
router.get('/users/:userID/tasks', DefaultAppMiddleware, TasksListMiddleware, TasksListHandler);
router.get('/users/:userID/tasks/:taskID', DefaultAppMiddleware, TasksShowMiddleware, TasksShowHandler);
router.post('/users/:userID/tasks/', DefaultAppMiddleware, TasksCreateMiddleware, TasksCreateHandler);
router.delete('/users/:userID/tasks/:taskID', DefaultAppMiddleware, TasksDeleteMiddleware, TasksDeleteHandler);

export default router
