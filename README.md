## vue自定义指令集合

一般涉及可复用的、dom操作都可以使用自定义指令；

##### vue自定义指令的钩子函数

- bind: 只调用一次，指令第一次绑定到元素时调用。可以进行一些初始化设置
- inserted: 插入到父节点时调用；（注意：仅保证父节点存在并插入时调用，并不一定已被插入到文档中）
- update: 所在组件的VNode更新是调用
- componentUpdated: 所在组件的VNode以及子VNode全部更新后调用
- unbind: 只调用一次，指令与元素解绑时调用

##### 参数

除了el之外，其他参数都应该是只读的。如果需要在钩子之间共享数据，建议通过元素的dataset来进行

- el: 绑定的元素
- binding: 一个对象，包含的属性有name、value、oldvalue(update\componentUpdated)、expression、arg、modifiers
- vnode
- oldVnode(update\componentUpdated)



