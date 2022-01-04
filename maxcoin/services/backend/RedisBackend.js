/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const Redis = require("ioredis");
const CoinAPI = require('../CoinAPI');

class RedisBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
  }

  async connect() {
    this.client = new Redis();
    return this.client;
  }

  async disconnect() {

  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const values = [];
    
    Object.entries(data.bpi).forEach(entries => {
      values.push(entries[1]);
      values.push(entries[0]);
    });

    return this.client.zadd('maxcoin:values', values);
  }

  async getMax() {
    return this.client.zrange("maxcoin:values", -1, -1, "WITHSCORES");
  }

  async max() {
    const client = this.connect();
    
    if (client) {
      console.log("Successfully connected to Redis");
    } else {
      throw new Error("Connecting to Redis failed");
    }

    const insertResult = await this.insert();
    console.log(`Inserted ${insertResult} documents to redis`);
    const result = await this.getMax();
    await this.disconnect();
    return result;
  }
}

module.exports = RedisBackend;