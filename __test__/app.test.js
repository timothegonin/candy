import app, {store} from '../app.js'

describe('Buy candy', () => {
  console.log(store)
  it('should remove candies from inventory', () => {
    expect(app.buyCandies(store.Chamallows.number, 20)).toEqual(490)
  })
});
describe('Add candy', () => {
  let currentStore = store.Chamallows.number;
  currentStore -= 506
  const otherStore = store.Tagada.number

  it('should add candies to inventory', () => {
    expect(app.addCandies(currentStore, 600)).toEqual(604)
  })
  it('should not alter the other candies inventory', () => {
    app.addCandies(currentStore, 600)
    expect(otherStore).toEqual(510)
  })
})