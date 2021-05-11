<template>
  <div class="commenHeader">
    <div class="left"><p>{{english}}</p><p>{{chinese}}</p></div>
    <div class="right">
      <p>您当前所在城市：{{city}}</p>
    <p>今日天气：{{wea}}</p>
    </div>
  </div>
</template>

<script>
import gets from '../api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      city: '',
      update_time: '',
      wea: '',
      english: '',
      chinese: ''
    }
  },
  methods: {
    async weather () {
      // 发送异步请求
      const result = await gets.getWeather()
      let data = result.data
      this.city = data.city
      this.wea = data.wea
      this.update_time = data.update_time
    },
    async english1 () {
      const result = await gets.getEnglish()
      // console.log(result.data.newslist[0].en)
      this.english = result.data.newslist[0].en
      this.chinese = result.data.newslist[0].zh
    }

  },
  mounted () {
    this.weather()
    this.english1()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commenHeader{
  height: 80px;
  background-color: #545C64;
  display: flex;
  color: white;
  justify-content: space-between;
}
.left{
  padding: 0 50px;
}
.right{
  padding: 0 50px;
}
</style>
