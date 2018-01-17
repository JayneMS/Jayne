# nile-crm-html

#### 原型图
https://ey8mhu.axshare.com/    （随时更新）

#### version
- 2018年01月13日 更新sidebar in index.html @少宁，请注意同步 

#### 已完成页面
@少宁，你可以在这里查看已完成的页面，随时去代码
- page-login.html	登录
- index.html		主页
- workspace_called.html		工作台/被叫中心
- flow_compentence_manage.html 流程管理/角色与权限管理
- workspace_my_workspace.html	工作台/我的工作台
- flow_user_manage.html	流程管理/用户管理
- data_import.html  数据导入


#### 可开发模块
- 工作台（坐席）
- 流程管理
- 系统设置
- 报表统计

### UI设计规范
#### 代码规范
- @小马，定义一个jayne.css用于写自己的css，不要修改框架中的css
- 每个页面，要把<title></title>标签中的题目，填写成对应当前页面的题目
#### 交互规范
- 删除时，一定要有弹框提示
- 涉及**form表单**，一定要规定必填字段，用红色星号表示，如：第一个字段一般为必填。如不确定，可询问少宁。规定必填字段后，点击确认提交表单前，要检查必填字段
- table列表中，如涉及到“编号”，“日期”，“数量”等字段，前端可以对当前页简单排序，参考ecommerce-orders.html页面
- 每个弹框，都应有确认取消两种操作。或者将取消放在右上角，用x号表示。如弹框中有需要填写的表单，点击遮罩层，弹框不可以关闭。
- 富文本编辑器参考：form-editor.html
