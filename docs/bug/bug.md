# Bug

## 微信端调整字体大小后页面显示异常

ios：在css中加入-webkit-text-size-adjust: 100% !important;
```
body {
    -webkit-text-size-adjust: 100% !important;
}
```
安卓：借助WeixinJSBridge对象来阻止字体大小调整，将此段代码放在在程序的入口页面(例如 index.html / index.ejs等)即可
```
(function () {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    }
    function handleFontSize () {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
     }
})();
```

## ios端input无法输入
为input加入样式后即可解决
```
-webkit-user-select:text !important;
```

## canvas绘制图片调用toDataUrl跨域
为img对象添加属性crossOrigin即可解决
```
img.setAttribute("crossOrigin",'anonymous');
```

## 元素添加c3动画后导致z-index失效
可以为被遮盖的元素同样添加一个c3动画来解决
