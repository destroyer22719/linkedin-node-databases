const RedisBackend = require("./services/backend/RedisBackend");
// const CoinAPI = require("./services/CoinAPI");

// async function run() {
//   const coinAPI = new CoinAPI();
//   return coinAPI.fetch();
// }

async function runRedis() {
  const redisBackend = new RedisBackend();
  return redisBackend.max;
}

runRedis()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
