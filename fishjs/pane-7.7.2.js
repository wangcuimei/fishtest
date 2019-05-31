Vue.component('pane',{
    name: "pane",
    template: '<div class="pane" v-show="show">\
                    <slot></slot>\
                </div>',
    data: function(){
        return {
            show: true
        };
    }                
})