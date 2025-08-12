// middleware/multer.js - UPDATED
import multer from "multer";

// Use memoryStorage to keep the file as a buffer in memory
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

export default upload;