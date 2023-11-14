<template>
  <div class="body">
    <h1>{{ msg }}</h1>
    <h2>HALLO FAVOURITE</h2>
    <div class="container">
      <div class="lg:flex-1 lg:bg-green-500 md: bg-red-600"></div>
    <div class="live-room">
      中间直播间的内容
    </div>
    <div class="lg:flex-1 lg:bg-green-500 md: bg-red-600"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .container {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    .left-space, .right-space {
      flex: 1;
      background-color: #f0f0f0; /* 左右空白的背景颜色 */
    }

    .live-room {
      flex: 3; /* 中间直播间的比例可以调整 */
      background-color: #ffffff; /* 直播间的背景颜色 */
      /* 这里可以添加其他直播间的样式 */
    }

</style>
