const request = require('supertest');
const http = require('http');
const app = require('../app');
const port = 5000;
const server = http.createServer(app);  // requires listener that it listens to


describe('API server test', () => {

    beforeAll(() => {   
        server.listen(port, () => console.log(`[TEST SERVER] : is listening on port ${port}`)); 
    });

    afterAll(done => {
        apiServer.close(done);
    });

    describe('Route "/" ', () => { 
        it('should GET with status code 200', done => { 
            request(server)
                .get('/')
                .expect(200, done) 
        });

        it('shoul GET and return message', done => { 
            request(server)
                .get('/')
                .expect(("Shop API rendered a welcome message to you!"), done)
        });
    });  
});