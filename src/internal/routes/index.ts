/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Router } from 'express';

// Middlewares
import DefaultAppMiddleware from '../../middleware/app';
import AuthLoginMiddleware from '../../middleware/auth/login';
import AuthLogoutMiddleware from '../../middleware/auth/logout';
import AuthRegisterMiddleware from '../../middleware/auth/register';
import TodosCreateMiddleware from '../../middleware/todos/create';
import TodosDeleteMiddleware from '../../middleware/todos/delete';
import TodosListMiddleware from '../../middleware/todos/list';
import TodosShowMiddleware from '../../middleware/todos/show';


// Handlers
import AuthLoginHandler from './auth/login';
import AuthLogoutHandler from './auth/logout';
import AuthRegisterHandler from './auth/register';
import TodosCreateHandler from './todos/create';
import TodosDeleteHandler from './todos/delete';
import TodosListHandler from './todos/list';
import TodosShowHandler from './todos/show';


// Routes
const router: Router = Router();
router.post('/auth/login', DefaultAppMiddleware, AuthLoginMiddleware, AuthLoginHandler);
router.get('/auth/logout', DefaultAppMiddleware, AuthLogoutMiddleware, AuthLogoutHandler);
router.post('/auth/register', DefaultAppMiddleware, AuthRegisterMiddleware, AuthRegisterHandler);
router.post('/users/:userID/todos', DefaultAppMiddleware, TodosCreateMiddleware, TodosCreateHandler);
router.delete('/users/:userID/todos/:todoID', DefaultAppMiddleware, TodosDeleteMiddleware, TodosDeleteHandler);
router.get('/users/:userID/todos', DefaultAppMiddleware, TodosListMiddleware, TodosListHandler);
router.get('/users/:userID/todos/:todoID', DefaultAppMiddleware, TodosShowMiddleware, TodosShowHandler);


export default router