# 3.9 动态请求参数


:::caution 温馨提醒
`knife4j` 版本>2.0.1 使用此规则
:::


在某些特定的情况下,因为我们对于接口使用的是一种先定义,后展示的规范执行,所以我们在界面上看到的请求参数,全部来源于我们后端接口层如何定义

但是如果后端定义的是一种Map结构,或者是参数并没有定义声明,而希望也能达到一种动态添加参数进行调试的结果,这种体验有点类似于`postman`

`Knife4j`针对上面的需求提供了支持

## 后台开启

开发者也可以通过开启Knife4j的[增强配置](/docs/features/enhance)，进行默认开启，配置如下：
```yml
knife4j:
  enable: true
  setting:
  # 开启动态请求参数，true-开启，false-关闭
    enable-dynamic-parameter: true

```

## 界面开启

在`Knife4j`的前端页面中,个性化设置功能里,可以开启对参数的动态调试(`该选项默认是关闭状态`)，如下图：

![](/knife4j/images/knife4j/plus/debugDynamic.png)


当在配置中勾选该选项后,我们的接口栏会有变化,如下图：

![](/knife4j/images/knife4j/plus/debugDynamic1.png)


在原本已存在的参数栏下会出现一栏空的参数栏,开发者可以输入参数名称、参数值对参数进行添加

不管是参数名称的变化还是参数值的变化,变化后会自动追加一行新的调试栏参数,效果图如下：


![](/knife4j/images/knife4j/plus/dynamicparam3.gif)



 
 
 