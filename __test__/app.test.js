import app from '../app.js'

describe('Buy candy', () => {
  it('should remove candies from inventory', () => {
    expect(app.buyCandies(20)).toEqual(490)
  })
});