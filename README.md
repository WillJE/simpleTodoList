# simpleTodoList
>use vuejs create a todolist component

[demo]("http://www.willlin.cn/simpleTodoList/index.html")

难点：

1. 父子组件间的通信（$on/$emit自定义事件）

[参考资料](参考资料 "https://github.com/Kelichao/vue.js.2.0/issues/19")

>父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，应该怎样做？那就是自定义事件！

	<!-- 父组件 -->
	<div id="app">
	  <!-- 子组件 -->
	  <!-- 父组件直接用 v-on 来监听子组件触发的事件。 -->
	  <!-- 需跟子组件中的$emit组合使用 -->
	  <mycon v-on:son_method="father_method"></mycon>
	</div>
>父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。然后再对应子组件方法执行处触发事件，两者缺一不可。

	// 子组件
	Vue.component('mycon', {
	  template: '<button v-on:click="son_method">子按钮</button>',
	  methods: {
	  	// 按钮点击时候触发事件
	    son_method: function () {
	      this.counter += 1;
	 	  console.log("son");
	      // 这句话来触发事件
	      // 必须跟模板中的v-on配合使用
	      this.$emit('son_method');
	    }
	  },
	});
	
	// 父组件
	new Vue({
	  el: "#app",
	  methods: {
	    father_method: function () {
	      console.log("father");
	    }
	  }
	});

