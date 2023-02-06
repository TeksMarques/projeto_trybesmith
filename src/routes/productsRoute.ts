import { Router } from 'express';
import ProductsController from '../controllers/ProductController';

const router = Router();

const product = new ProductsController();

router.post('/', (req, res) => product.create(req, res));
router.get('/', (req, res) => product.getAll(req, res));

export default router;