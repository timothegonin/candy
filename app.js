export const store = {
  Chamallows : {
    number : 510,
  },
  Tagada : {
    number : 510,
  },
  Carambars : {
    number : 510,
  },
  Dragibus : {
    number : 510,
  },
}

const buyCandies = (candiesStore, numberOfCandiesToRemove) => {
  return candiesStore - numberOfCandiesToRemove
}

export default{
  buyCandies
}