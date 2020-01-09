Vue.component('pane', {
  name: "pane",
  template: '<div class="pane" v-show="show">我是pane\
<slot></slot>\
</div>',
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      show: true
    };
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    }
  },
  watch: {
    lable() {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  }
});