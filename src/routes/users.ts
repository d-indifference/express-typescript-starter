import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', (req, res) => {
	res.json({
		user: 'Вася'
	});
});

export default router;
