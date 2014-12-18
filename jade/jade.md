# jade模板学习

- 这几天研究了一下jade，在新功能里用jade替换了html，还是挺不错的
- 类似于emmet的语法，并且和fis配合的还不错，记录一下

- 具体的jade语法，github上官方的[中文文档](https://github.com/jadejs/jade/blob/master/Readme_zh-cn.md)已经不能再详细了
- 还有一个很好的[练习页面](http://naltatis.github.io/jade-syntax-docs)

- 主要记录一下和fis的集成，fis提供了配合jade的
- 项目里主要用到了jade编译为html的功能，数据加载模板的功能没用到，使用了jade比较简单的功能

1. 本地安装fis-parser-jade

    ```
    npm install -g fis-parser-jade
    ```
2. 然后再项目的fis-conf.js里加入下面两行

     
