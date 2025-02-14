import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

// Setup Multer to handle file uploads and store them in the "public/images" folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(process,cwd(), 'public/images')  // Ensure "public/images" directory exists
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        // Generate a unique filename
        const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// API Route handler for uploading an image
export const config = {
    api: {
        bodyParser: false, // Disable built-in bodyParser for multer to handle form data
    }
}

// API Route handler for uploading an image
export default function handler(req, res) {
    if (req.method === 'POST') {
        upload.single('image')(req, res, (err) => {
            if( err ) {
                return res.status(500).json({ error: err.message });
            }

            // Image has been uploaded, you can return the image URL
            const imageUrl = `/image/${req.file.filename}`;
            res.status(200).json({ message: 'success'});
        });
    } else {
        res.status(405).json({ message: 'Method not allowed '})
    }
}
