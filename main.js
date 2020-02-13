// data存储之前的哈希值
// 自己的哈希值：它是存储在区块里的信息 算出来的(data+之前的区块哈希值)
// const sha256=require('crypto-js/256')
// import Base64 from 'crypto-js/enc-base64'
// import sha256 from 'crypto-js/256'
const sha256 = require("crypto-js/sha256"); //库256一个算法去算它的hash

class Block {
  constructor(data, lasthash) {
    this.data = data;
    this.lasthash = lasthash;
    this.hash = this.computedhash();
  }
  computedhash() {
    return sha256(this.data + this.lasthash).toString();
  }
}
const pay = new Block("收款10元", "123");
const pay2 = new Block("收款10元", "1234");

console.log(pay);
console.log(pay2);
