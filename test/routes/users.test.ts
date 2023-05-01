import request, { Response } from 'supertest';
import app from '../../src/app';

describe('GET /users ', () => {
	it('GET /users => string', () => {
		return request(app)
			.get('/users')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((response: Response) => {
				expect(response.body).toBeDefined();
				expect(response.body['user']).toBe('Вася');
			});
	});
});
