# DenoExpress

一个基于 Deno 的轻量级 Web 服务器框架，提供类似 Express 的 API 风格，但充分利用了 Deno 的特性。

## 项目简介

DenoExpress 是一个简单高效的 Web 服务框架，它利用 Deno 的内置功能构建，提供标准化的响应格式和错误处理机制。本项目参考了 [Deno 官方的 Express 教程](https://docs.deno.com/examples/express_tutorial/)，但进行了一些定制化的改进。

## 功能特点

- 简单的服务器配置
- 标准化的 JSON 响应格式
- 内置错误处理机制
- 支持开发模式下的热重载

## 安装要求

- [Deno](https://deno.com/) v1.34 或更高版本

## 快速开始

### 安装 Deno

如果你还没有安装 Deno，请参考 [Deno 官方安装指南](https://deno.com/manual@v1.36.4/getting_started/installation)。

### 运行服务器

```bash
# 开发模式（支持热重载）
deno task dev

# 生产模式
deno task start

# 运行测试
deno task test
```

服务器默认运行在 `http://localhost:8001`。

## 项目结构

```
DenoExpress/
├── deno.json          # Deno 配置文件
├── main.ts            # 主应用入口
├── main_test.ts       # 测试文件
├── README.md          # 项目文档
└── utils/             # 工具函数目录
    ├── errorHandler.ts # 错误处理工具
    └── main.ts        # 主要工具函数
```

## API 使用示例

### 创建基本服务器

```typescript
import { makeResponse } from "./utils/main.ts";

Deno.serve(
  {
    port: 8001,
  },
  (_req: Request) => {
    return makeResponse("hello world");
  }
);
```

### 标准响应格式

```typescript
// 成功响应
{
  "code": 0,
  "msg": "Success",
  "data": "hello world"
}

// 错误响应
{
  "code": 1,
  "msg": "错误信息"
}
```

## 贡献指南

欢迎提交 issues 和 pull requests 来改进这个项目。请确保你的代码符合项目的编码规范。

## 许可证

[MIT](https://opensource.org/licenses/MIT)

## 相关资源

- [Deno 官方文档](https://deno.land/manual)
- [Deno Express 教程](https://docs.deno.com/examples/express_tutorial/)
