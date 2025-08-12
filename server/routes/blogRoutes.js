import express from 'express';
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, togglePublish } from '../controllers/blogController.js'; // Assuming this is your controller file
import auth from '../middleware/auth.js'; // Your authentication middleware
import upload from '../middleware/multer.js';

const blogRouter = express.Router();

// Define the route with the multer middleware
blogRouter.post('/add', auth, upload.single('image'), addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);

export default blogRouter;