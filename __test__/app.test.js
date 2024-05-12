import app, {store} from '../app.js'

describe('Buy candy', () => {
  console.log(store)
  it('should remove candies from inventory', () => {
    expect(app.buyCandies(store.Chamallows.number, 20)).toEqual(490)
  })
  it('should add candies to inventory', () => {
    expect(app.addCandies(4, 600)).toEqual(604)
  })
});