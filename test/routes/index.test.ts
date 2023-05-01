import request, { Response } from 'supertest';
import app from '../../src/app';

describe('GET / ', () => {
	it('GET / => string', () => {
		return request(app)
			.get('/')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((response: Response) => {
				expect(response.body).toBeDefined();
				expect(response.body['message']).toBe('Все классно работает');
			});
	});
});
