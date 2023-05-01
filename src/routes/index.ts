import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.json({
		message: 'Все классно работает'
	});
});

export default router;
