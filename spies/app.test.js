const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Weslley', 21);
    expect(spy).toHaveBeenCalledWith('Weslley', 21);
  });

  it('should call saveUser at db', () => {
    const email = 'admin@amdin.com';
    const password = '123@abc';

    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
