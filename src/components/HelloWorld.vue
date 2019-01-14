<template>
  <div class="hello">
    <table>
      <thead>
      <tr>
        <td>型号</td>
        <td>价格</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" v-bind:key="item._id">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.$http({
          method: 'get',
          url: '/api/hero'
        }).then((res) => {
          this.list = res.data
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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

  table {
    width: 100%;
  }
</style>
