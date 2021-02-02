const redis = require("redis");
const client = redis.createClient({
    host: "121.36.207.158",
    port:"6379",
    password: "yYH+496219445"
});

client.on("error", function (error) {
  console.error("redis",error);
});

const get = function (key) {
  return new Promise((resolve, reject) => {
    client.get(key, function (err, reply) {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
};

const set = function (key, value,time=60) {
    return new Promise((resolve, reject) => {
      client.set(key,value, function (err) {
        client.expire(key, time);
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };
module.exports = {
  get,
  set
};
