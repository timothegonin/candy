import app, {store} from '../app.js'

describe('Buy candy', () => {
  console.log(store)
  it('should remove candies from inventory', () => {
    expect(app.buyCandies(store.Chamallows.number, 20)).toEqual(490)
  })
});