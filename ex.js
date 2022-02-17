const { I2C } = require("i2c");
const i2c0 = new I2C(0);

const { MPU6050 } = require("./index");
const mpu = new MPU6050();
mpu.setup(i2c0);

setInterval(() => {
  var v = mpu.read();
  console.log(
    `ax=${v[0]},ay=${v[1]},az=${v[2]},gx=${v[4]},gy=${v[5]},gz=${v[6]},tmp=${v[3]}`
  );
}, 100);
