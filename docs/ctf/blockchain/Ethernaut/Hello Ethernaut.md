# 0.Hello Ethernaut

## 题目描述

![img](../../../.vuepress/public/img/1644590608643-a172afc0-d39e-41bc-82e7-3b9ddf9497e5.png)



## 解题过程

题目源码

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Instance {

  string public password;
  uint8 public infoNum = 42;
  string public theMethodName = 'The method name is method7123949.';
  bool private cleared = false;

  // constructor
  constructor(string memory _password) public {
    password = _password;
  }

  function info() public pure returns (string memory) {
    return 'You will find what you need in info1().';
  }

  function info1() public pure returns (string memory) {
    return 'Try info2(), but with "hello" as a parameter.';
  }

  function info2(string memory param) public pure returns (string memory) {
    if(keccak256(abi.encodePacked(param)) == keccak256(abi.encodePacked('hello'))) {
      return 'The property infoNum holds the number of the next info method to call.';
    }
    return 'Wrong parameter.';
  }

  function info42() public pure returns (string memory) {
    return 'theMethodName is the name of the next method.';
  }

  function method7123949() public pure returns (string memory) {
    return 'If you know the password, submit it to authenticate().';
  }

  function authenticate(string memory passkey) public {
    if(keccak256(abi.encodePacked(passkey)) == keccak256(abi.encodePacked(password))) {
      cleared = true;
    }
  }

  function getCleared() public view returns (bool) {
    return cleared;
  }
}
```

主要是了解使用方法和基本操作

```javascript
await contract.info()
// "You will find what you need in info1()."
await contract.info1()
// "Try info2(), but with "hello" as a parameter."
await contract.info2('hello')
// "The property infoNum holds the number of the next info method to call."
await contract.infoNum()
// 42
await contract.info42()
// "theMethodName is the name of the next method."
await contract.theMethodName()
// "The method name is method7123949."
await contract.method7123949()
// "If you know the password, submit it to authenticate()."
await contract.password()
// "ethernaut0"
await contract.authenticate('ethernaut0')
```

![img](https://cdn.nlark.com/yuque/0/2022/png/2117730/1644591155092-0ca49f9f-8514-4b9d-aeca-4522435b7e0d.png)