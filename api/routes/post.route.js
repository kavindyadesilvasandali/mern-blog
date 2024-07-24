import express from 'express'
//import { verify } from 'jsonwebtoken';
import { verifyToken } from '../utils/verifyUser.js';
import { create , getposts, deletepost} from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken , create );
router.get('/getposts', getposts);
router.delete('deletepost/:postId/:userId', verifyToken, deletepost)

export default router;