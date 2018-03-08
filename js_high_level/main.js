/**
 * Created by zlh on 2018.03.08.
 */
/*
*   模块的加载  默认情况下，假设main所依赖的模块与main.js在同一个目录下，可以自动加载
*   使用require.config()方法，可以对模块的加载行为进行自定义   require.config()方法放在主模块的头部
*   参数就是一个对象，这个对象的paths属性制定各个模块的加载路径  例如
* */
require.config({
    paths:{                 //这种方法是依赖的模块与主模块在一个目录下，就这样写
        "jQuery":"jQuery.min",
        "backdd":"dgghdgscgsjhsh"
    }
})//当不在一个目录下，就这样  方法一
require.config({
    paths:{
        "jQuery":"lib/hfdsdhsd",
        "jdkghgsdhjcg":"lib/jbhsdh"
    }
})//方法二  直接改变方法基
require.config({
    baseUrl:"js/lib",
    paths:{
        "jQuery":"dhedgw",
        "djgw":"jdvwegwg"
    }
})
//如果一个模块在一个网站上，则直接引用他的网址
require.config({
    paths:{
        "jQue":"http://www.baidu.com?jkdghdgc..."
    }
})
//require.js规定，每一个模块是一个js文件，这样的话要加载多个模块，就要发出多次HTTP请求，影响
//页面的加载速度，因此它提供了一个优化工具，可以将多个模块合并在一个文件中，减少HTTP请请求数
/*
*   js主模块的写法   如果主模块不依赖任何模块  ，直接写js代码即可，但此时require.js没作用
*   因此一般都会依赖其他模块 ，这时就需要使用require()函数来加载其他模块  例如
* */
require(["moduleA","moduleB","moduleC"],function (moduleA,moduleB,moduleC) {
    //...  some code     //只有模块A.B,C都异步加载完毕后，回调函数才会执行
})
//实例
require(["jQuery"],function ($) {
    //...some code       //浏览器会加载jQuery,才会执行回调函数的代码，主模块的代码都卸载回调函数中。
})

/*
*   AMD模块的写法   要用到define()方法,一个模块不依赖其他模块是，这样写
*   //main.js
*   define(function(){
*           var add=function(x,y){
*               return x+y;
*           }
*           return {
*               add:add
*           };
*   })
*   加载方法为
*   require(["math"],function(math){
*           alert(math.add(1,1));
*   })
*   当依赖时，怎么做。。。
*   当不按AMD规范写模块时，应该...
* */