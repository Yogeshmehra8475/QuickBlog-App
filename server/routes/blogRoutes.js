import express from 'express';
import { addBlog } from '../controllers/blogController.js'; // Assuming this is your controller file
import auth from '../middleware/auth.js'; // Your authentication middleware
import upload from '../middleware/multer.js';
const blogRouter = express.Router();

// Define the route with the multer middleware
blogRouter.post('/add', auth, upload.single('image'), addBlog);

export default blogRouter;