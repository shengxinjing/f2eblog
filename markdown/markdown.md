#markdown学习记录

>为了更好的用github记录自己的学习，学md是第一步
>sublime里装一个markdown edit 和markdown preview
>fis也能自动编译md，但是还得写fis-conf，太麻烦，决定用markdown preview，写完md之后，Ctrl+B，自动生成可阅读的html文件，然后用 fis release -cwL,就实现了左边写md，Ctrl+B保存，右边的浏览器自动刷新看效果了，萌萌哒

> 代码和效果对应

```
#这是一个标题1
```
#这是一个标题1

```
##这是一个标题2
```

##这是一个标题2

```
###这是一个标题3
```

###这是一个标题3

```
####这是一个标题4
```

####这是一个标题4

```
#####这是一个标题5
```

#####这是一个标题5

```
######这是一个标题6
```

######这是一个标题6

```
**这是一个粗体**
__这也是一个粗体__
```
**这是一个粗体**
__这也是一个粗体__

```
*这是一个斜体*
_这也是一个斜体_
```
*这是一个斜体*
_这也是一个斜体_

```
>这是一个引用
```
>这是一个引用


```

* 列表
* 列表
* 列表

+ 列表
+ 列表
+ 列表

- 列表
- 列表
- 列表

```
* 列表
* 列表
* 列表

+ 列表
+ 列表
+ 列表

- 列表
- 列表
- 列表


```
1.编号列表
2.编号列表
3.编号列表
```
1.编号列表
2.编号列表
3.编号列表

```
超链接 [百度](http://baidu.com)
```
超链接 [百度](http://baidu.com)

```
相对连接 [markdown.html](/markdown.html)
```
相对连接 [markdown.html](/markdown.html)


```
普通连接 <http://www.baidu.com>
```
普通连接 <http://www.baidu.com>

```
定义链接
[baidu]: http://www.baidu.com

from [baidu]
```
定义链接
[baidu]: http://www.baidu.com

from [baidu]



```
图片
![github](https://avatars0.githubusercontent.com/u/1905176)

定义图片
[dog]: https://avatars0.githubusercontent.com/u/1905176

[baidu]: http://www.baidu.com
```
图片
![github](https://avatars0.githubusercontent.com/u/1905176)

定义图片
[dog1]: https://avatars0.githubusercontent.com/u/1905176
![dog][dog1]



```
行内代码`alert(2)`

```


行内代码`alert(2)`


\`\`\`js
    \#单独代码，用三个反引号，可以加上语言(github上md特有功能    function test(){
        console.log('hello')
    }
)
    function test(){
        console.log('hello')
    }

\`\`\`


```python
    \#单独代码，用三个反引号，可以加上语言
    function test(){
        console.log('hello')
    }
```



```
分割线
***
```
分割线
***


```
markdown 支持输入一些特殊字符
\\
\`
\*
\_
\{}
\[]
\()
\#
\+
\-
\.
\!

```
markdown 支持输入一些特殊字符
\\
\`
\*
\_
\{}
\[]
\()
\#
\+
\-
\.
\!



>GFM额外的功能
>代码支持语言

```
支持直接链接
http://www.baidu.com
```
支持直接链接
http://www.baidu.com


```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
