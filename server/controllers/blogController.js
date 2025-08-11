import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res)=> {
    try{
        const {title, subTitle, description, category, isPublished}= req.body;
        const imageFile = req.file;

        // Check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Missing required fields" })
        }
        
        // Read the file buffer
        const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload Image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "./blogs"
        });

        // Optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},      // Auto compression
                {format: 'webp'},       // Convert to modern format
                {width: '1280'}         // Width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished});

        // Delete the temporary file created by Multer
        fs.unlinkSync(imageFile.path);

        res.json({success: true, message: "Blog added successfully"});
    } catch (error) {
        // Ensure temporary file is deleted even if an error occurs
        if(req.file && fs.existsSync(req.file.path)){
             fs.unlinkSync(req.file.path);
        }
        res.json({success: false, message: error.message});
    }
}