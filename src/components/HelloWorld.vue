<template>
  <div class="hello">
    <h1>音乐排行榜</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$axios({
        method: "get",
        url: "/serve/music", // 接口地址
        data: {
          keyword: "1"   // 传接口参数
        }
      })
        .then(response => {
          this.list = response.data.list
        })
        .catch(error => 
          console.log(error, "error")
        ); // 失败的返回
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
