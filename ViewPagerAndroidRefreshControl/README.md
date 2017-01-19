# 演示 ViewPagerAndroid 和 RefreshControl 冲突的代码

# 运行

```shell
$ npm install --verbose
$ react-native run-android
```

# 说明

在 react-native v0.36 之前，会出现 RefreshControl 和 ViewPagerAndroid （也就是最上面的那个滚动组件） 手势冲突的现象，示意图如下：

![轮播冲突示意](http://pub.idqqimg.com/pc/misc/files/20170118/cbc1014edd3f4e2da37ca0662ba76847.gif)

在 react-native v0.36 之后，此问题已经解决。

若想查看之前的效果，可以将 package.json 中的 react-native 依赖改为之前的版本，比如 `0.31.0`

# 参见

- https://github.com/facebook/react-native/issues/8090
