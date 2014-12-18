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

 ```js
     //使用fis-parser-jade插件编译jade文件
     fis.config.set('modules.parser.jade', 'jade');
     //jade文件经过编译后输出为html文件
     fis.config.set('roadmap.ext.jade', 'html');
 ```
3. 然后就很high了，直接上代码
4. 源码
    ```js
    //js文件
    app.directive('demo', function () {
        return {
            template: __inline('demo.jade'),
            scope: {},
            link: function postLink(scope, iElement, iAttrs) {
                console.log(1)
            }
        };
    })

    //jade模板
    .demo
        input(type='text')
    p.alert demo
    ```
5. 执行fis编译命令
```js
    //发布到本地的output目录
    fis release -d output
``` 
6. 编译后的html和js
```html
<div class="demo"><input type="text"/></div><p class="alert">demo</p>
```

```js
app.directive('demo', function () {
    return {
        template: "<div class=\"demo\"><input type=\"text\"/></div><p class=\"alert\">demo</p>",
        scope: {},
        link: function postLink(scope, iElement, iAttrs) {
            console.log(1)
        }
    }
})
```
7. 么么哒，不需要html2js这种服务 这样所有模板都不需要异步加载，集成jade，增强效率第一步搞定
