class MPU6050 {
  constructor() {
    this.addr = 0x68;
  }

  /**
   * Setup MPU6050
   * @param {I2C} i2c
   */
  setup(i2c) {
    this.i2c = i2c;
    this.i2c.write(new Uint8Array([0x6b, 0x00]), this.addr);
  }

  /**
   * @return {In16Array[7]}
   */
  read() {
    this.i2c.write(new Uint8Array([0x3b]), this.addr);
    var buf = this.i2c.read(14, this.addr);
    var arr = new Int16Array(7);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = (buf[i * 2] << 8) | buf[i * 2 + 1];
    }
    return arr;
  }
}

exports.MPU6050 = MPU6050;
