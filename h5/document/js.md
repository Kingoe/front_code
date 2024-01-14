## JavaScript 是 Web 的编程语言；web 语言三剑客：HTML、CSS、JavaScript
HTMl 定义了网页的内容
CSS 描述了网页的布局
JavaScript 控制了网页的行为

JavaScript是脚本语言，一种轻量级的编程语言，是可插入HTML页面的编程代码，由所有的现代浏览器执行。 浏览器会在读取代码时，逐行的执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译



# js 可执行操作： 
直接写入 html 输出流
    document.write("<h1>这是一个标题</h1>");
    document.write("<p>这是一个段落。</p>");
对事件的反应
    <button type="button" onclick="alert('欢迎!')">点我!</button>
改变HTML内容
    x=document.getElementById("demo");  //查找元素
    x.innerHTML="Hello JavaScript";    //改变内容
改变HTML图像
    <script>
        function changeImage()
        {
            element=document.getElementById('myimage')
            if (element.src.match("bulbon"))
            {
                element.src="/images/pic_bulboff.gif";
            }
            else
            {
                element.src="/images/pic_bulbon.gif";
            }
        }
    </script>
    <img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">


改变HTML样式
    x=document.getElementById("demo")  //找到元素 
    x.style.color="#ff0000";           //改变样式
验证输入
    if isNaN(x) {
        alert("不是数字");
    }

# JavaScript 用法
HTML 中的 Javascript 脚本代码必须位于 <script> 与 </script> 标签之间。Javascript 脚本代码可被放置在 HTML 页面的 <body> 和 <head> 部分中


