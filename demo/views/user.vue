<template>
  <div>
    <h1>user页面，参数是 {{$route.params.id}}</h1>
  </div>
</template>
<script>
  export default {
    mounted() {
      console.log(this.$route);
    }
  }
</script>