<template>
  <h1><a :href="'#' + title">{{title}}</a></h1>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style scoped>
  h1 a {
    color: rgb(51, 153, 255);
    font-size: 24px;
  }
</style>