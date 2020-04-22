import { get } from './helpers'

// const getSeller = get('/api/seller')
// const getGoods = get('/api/goods')
// const getRatings = get('/api/ratings')

// export {
//   getSeller,
//   getGoods,
//   getRatings
// }

const NODE_ENV = process.env.NODE_ENV

const getSeller =
  NODE_ENV !== 'production' ? get('api/seller') : get('data/seller.json')
const getGoods =
  NODE_ENV !== 'production' ? get('api/goods') : get('data/goods.json')
const getRatings =
  NODE_ENV !== 'production' ? get('api/ratings') : get('data/ratings.json')

export { getSeller, getGoods, getRatings }
