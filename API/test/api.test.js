const request = require('supertest');
const app = require('../src/server');

/**
 * Testing get all Users Registered
 */
describe("Get /api/users",()=>{
    it('I will return the list with all users',(done)=>{
        request(app)
            .get('/api/users')
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(200,done)
    });

    it('Checking path and error',(done)=>{
        request(app)
            .get('/api/users/545454')
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(404,done)
    });
});

/**
 * Testing get One Users Registered
 */

describe("Get /api/users/:id",()=>{
    it('check that the user is foun',(done)=>{
        request(app)
            .get('/api/users/600ef6860bf56e2284cc4049')
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(200,done)
    });

    it('user not found',(done)=>{
        request(app)
            .get('/api/users/:id')
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(404,done)
    })
});

/**
 * Testing post signup Users
 */

describe('Post /api/user',()=>{
    it('review of good user registration',(done)=>{
        
        const data = {
            name:'Moise',
            email:'moises6669@gmail.com',
            password:'12345'
        }

        request(app)
            .post('/api/signup')
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err)=>{
                if(err) return data(err);
                done();
            });
    });

    it('Validation of whether an email exists',(done)=>{
        const email = 'moises6669@gmail.com';

        request(app)
            .post('/api/signup')
            .send(email)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err)=>{
                if(err) return done(err);
                done();
            });
    })

});
/**
 * Testing Delete User
 */
describe('Update User',()=>{
    it('user deletion verification',(done)=>{
        let name = 'alex';
        request(app)
            .delete('/api/users/600f3bdafca3709e217a3ab5')
            .send(name)
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(201,done)
    });

    it('User message verification not found',(done)=>{
        request(app)
            .delete('/api/users/11111111')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err)=>{
                if(err) return done(err);
                done();
            });
    });
});


/**
 * Testing Delete User
 */

describe('Delete User',()=>{
    it('user deletion verification',(done)=>{
        request(app)
            .delete('/api/users/600f3bdafca3709e217a3ab5')
            .set('Accept','Application/json')
            .expect('content-type',/json/)
            .expect(201,done)
    });

    it('User message verification not found',(done)=>{
        request(app)
            .delete('/api/users/11111111')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(400)
            .end((err)=>{
                if(err) return done(err);
                done();
            });
    });
});