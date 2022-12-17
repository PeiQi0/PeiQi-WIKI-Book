# V2Board Admin.php 越权访问漏洞

## 漏洞描述

V2board面板 Admin.php 存在越权访问漏洞，由于部分鉴权代码于v1.6.1版本进行了修改，鉴权方式变为从Redis中获取缓存判定是否存在可以调用接口，导致任意用户都可以调用管理员权限的接口获取后台权限

## 漏洞影响

<a-checkbox checked>V2Board v1.6.1</a-checkbox></br>

## 网络测绘

<a-checkbox checked>title="V2Board"</a-checkbox></br>

## 漏洞复现

对比代码更新部分

![img](../../../.vuepress/public/img/1671262250177-e7818814-a063-4920-bc99-6c27f80cb1cb.png)

与之前的代码相比较，鉴权在 v1.6.1 版本可以通过 `auth_data 或 authorizetion` 字段来实现验证

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cache;

class Admin
{
  /**
* Handle an incoming request.
*
* @param \Illuminate\Http\Request $request
* @param \Closure $next
* @return mixed
*/
  public function handle($request, Closure $next)
  {
    $authorization = $request->input('auth_data') ?? $request->header('authorization');
    if (!$authorization) abort(403, '未登录或登陆已过期');

    $authData = explode(':', base64_decode($authorization));
    if (!Cache::has($authorization)) {
      if (!isset($authData[1]) || !isset($authData[0])) abort(403, '鉴权失败，请重新登入');
      $user = \App\Models\User::where('password', $authData[1])
        ->where('email', $authData[0])
        ->select([
                 'id',
                 'email',
                 'is_admin',
                 'is_staff'
                 ])
        ->first();
      if (!$user) abort(403, '鉴权失败，请重新登入');
      if (!$user->is_admin) abort(403, '鉴权失败，请重新登入');
      Cache::put($authorization, $user->toArray(), 3600);
    }
    $request->merge([
                    'user' => Cache::get($authorization)
                    ]);
    return $next($request);
  }
}
```

可以发现主要要通过两次逻辑实现验证，一个是存在 header 中的 authorization 参数，再一个是校验 authorizations 是否存在于 Redis缓存中的

![img](../../../.vuepress/public/img/1671263280790-db7b6174-5f26-4823-919f-2ca6443f009b.png)

在登陆验证的代码中，成功使用 email 和 password 登陆后会返回 token 和 auth_data

![img](../../../.vuepress/public/img/1671262605086-55aabd4e-fc53-41f5-a27e-6cfed6551b0a.png)

同时 auth_data 会缓存于 Redis 中

![img](../../../.vuepress/public/img/1671262910803-d4484032-ce2e-419e-a5b8-f00b8af2c7d3.png)

由于 Admin.php 文件中只验证了 authrization 是否在 Redis的缓存中，所以当注册任意一个用户进行登陆后获取到 auth_data 就可以任意调用 管理员的接口

![img](../../../.vuepress/public/img/1671263235610-bd2779bb-318f-41d3-a037-c21d868a9d8e.png)



![img](../../../.vuepress/public/img/1671263063721-8bcdece3-0aad-4b1f-86aa-6da75f5b271c.png)