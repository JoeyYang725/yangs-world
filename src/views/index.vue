<template>
  <div class="index">
    <aside width="200px">
      <commen-aside></commen-aside>
    </aside>
      <main>
        <commenHeader>
        </commenHeader>
        <mdBody></mdBody>
      </main>
  </div>
</template>

<script>
import CommenAside from '../components/commenAside.vue'
import commenHeader from '../components/commenHeader'
import mdBody from '../components/mdBody'

export default {
  data () {
    return {}
  },

  components: {
    commenHeader,
    CommenAside,
    mdBody
  },

  computed: {},

  mounted () {},

  methods: {}
}
</script>
<style>
.index{
  height: 100vh;
  display: flex;
}
aside{
  width: 200px;
}
main{
  flex:1
}

</style>
