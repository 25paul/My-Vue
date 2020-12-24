## ToDoList

https://blog.csdn.net/charlene0824/article/details/51199292

bodyParser支持此类参数的解析。不过如果需要发送json数据，需要对发送请求的请求头设置； 同时，请求信息的格式需要是json字符串格式，如果是json格式，需要通过JSON.stringify()方法将json格式的数据转化为json字符串格式的数据进行传输，后台node.js 在相应的路由下通过req.body接收请求的信息。