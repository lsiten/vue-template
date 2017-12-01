# vue项目模版

> 一个规范vue开发的模版，集成vue,vue router,vuex,axios

# 项目结构【从src开始规范，其他默认】
>---src开始--------------------------
>
>|-assets 【静态文件目录，如一些icon，css，图片等】
>
>|-components 【组件相关目录，一般为从页面抽象出来公用的组件】
>
>|-pages 【页面相关文件】
>
>|-router 【路由相关文件】
>
>|-vuex 【vuex相关文件】
>
>       |-modules 【vuex模块】
>
>       |-index.js 【store的入口文件，将在这里合并各个vuex模块】
>
>       |-api.js 【api获取或者提交数据统一接口】
>
>       |-types.js 【定义一些静态的常量】
>
>App.vue 【Vue的入口模版文件】
>
>main.js 【项目入口文件】
>
>------src结束--------------------------

## 使用规范【本小段所有文件的位置均以src为参考】

### 1、所有公用组件放在components文件夹里
### 2、所有页面文件，页面相关组件放在pages里
### 3、所有api请求都经过api.js
>api.js使用方法
``` bash
# 暴露一个接口在export default里，如，要一个获取get的获取新闻列表数据接口
 export default {
# url 接口地址
# cb 回调函数
   getNewsLists: (url,cb) => {func_axios(url,cb)},
 }

```

### 4、不同页面的数据放在不同的vuex模块里，通过getters获取其数据，例如com为通用配置模块，为其新建一个"com.js"，放于"vuex/modules",通过vuex/index.js引入，合并，步骤如下：
>1、新建vuex/modules/com.js
>
>2、在vuex/index.js中引入，并合并
>
>index.js
``` bash
# 引入com.js
import com from "./modules/com.js"
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com
    },
    strict:process.env.NODE_ENV !== 'production'
})
export default store;

```
### 5、vuex的使用，页面的控制器dispatch一个actions操作，actions操作进行数据获取【调用api.js】,再通过mutations更改state数据，state数据更改后自动更新视图，如要更改应用title【应用的标题，假设咋header组件里显示title】
>header组件
``` bash
<template>
 <div>
    <div class="title">
      {{title}}
    </div>
 </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters({
      title: "getTitle"
    })
  }
}
</script>
```
>
>com.js
``` bash

const state = {
  title:""
}
const getters = {
  getTitle: state=>state.title
}
const actions = {
  setAppTitle({commit},title){
    commit("setAppTitle",title);
  }
}
const mutations = {
  setAppTitle(state,title)
  {
    state.title = title;
  }
}
export default {
    state,
    actions,
    getters,
    mutations
}
```
>
>user.vue更改title为“个人中心”
``` bash
<script>
export default {
  created(){
    this.$store.dispatch("setAppTitle","个人中心");
  },
}
</script>
```
## 使用方法

``` bash
# 从github克隆到本地或直接下载[zip文件](https://github.com/lsiten/vue-template/archive/master.zip) 进行解压
git clone https://github.com/lsiten/vue-template.git

# 进入项目目录
cd vue-template

# 下载依赖，如果npm慢可以使用[cnpm](https://github.com/cnpm/cnpm) ：cnpm install
npm install

# 打开dev环境
npm run dev
```
