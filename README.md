# MPU6050

Kaluma library for MPU6050 6-axis motion sensor (3-axis accelerometer and 3-axis gyroscope).

# Wiring

Here is a wiring example for `I2C0`.

| Raspberry Pi Pico | MPU6050 |
| ----------------- | ------- |
| 3V3               | VCC     |
| GND               | GND     |
| GP4 (I2C0 SDA)    | SDA     |
| GP5 (I2C0 SCL)    | SCL     |

![wiring](https://github.com/niklauslee/mpu6050/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/mpu6050
```

# Usage

Here is an example code for reading raw data from MPU6050.

```javascript
const {I2C} = require('i2c');
const i2c0 = new I2C(0);

const {MPU6050} = require('mpu6050');
const mpu = new MPU6050();
mpu.setup(i2c0);

setInterval(() => {
  let v = mpu.read();
  console.log(`ax=${v[0]},ay=${v[1]},az=${v[2]},gx=${v[4]},gy=${v[5]},gz=${v[6]},tmp=${v[3]}`);
}, 100);
```

# API

## Class: MPU6050

A class for MPU6050.

### new MPU6050()

Create an instance of MPU6050 driver.

### mpu6050.setup(i2c)

- **`i2c`** `<I2C>` An instance of `I2C` to communicate.

Setup MPU6050 for a given I2C bus.

### mpu6050.read()

- **Returns**: `<Int16Array[7]>` An array of 16-bit signed integer value. The elements of returned array are as below:
  - `[0]` : X-axis of accelerometer (16-bit signed int)
  - `[1]` : Y-axis of accelerometer (16-bit signed int)
  - `[2]` : Z-axis of accelerometer (16-bit signed int)
  - `[3]` : Temperature (16-bit signed int)
  - `[4]` : X-axis of gyroscope (16-bit signed int)
  - `[5]` : Y-axis of gyroscope (16-bit signed int)
  - `[6]` : Z-axis of gyroscope (16-bit signed int)

> The returned values are raw data, so you may need to calibrate the raw data or apply some filters.
