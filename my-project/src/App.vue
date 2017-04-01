<template>
  <div class="">
      <comHeader></comHeader>
      <comContent></comContent>
      <comFooter></comFooter>
  </div>
</template>
<script>
  import Header from './components/header'
  import Footer from './components/footer.vue'
  import Content from './components/content.vue'
  export default {
    data(){
      return {
        greeting: 'Hello'
      }
    },
    components: {
      comHeader: Header,
      comFooter: Footer,
      comContent:Content
    }
  }
</script>
<style>

</style>

