var app = new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,
                name:"item1",
                price:200,
                count:1
            },
            {
                id:2,
                name:"item2",
                price:150,
                count:2
            },
            {
                id:3,
                name:"item3",
                price:200,
                count:2
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var price = 0;
            for(var i=0; i<this.list.length; i++)
            {
                var item = this.list[i];
                price += item.price* item.count;
            }
            return price.toString().replace(/\B(?=(\d{3})+$)/g,',');;
        }
    },
    methods:{
        handleReduce: function(index)
        {
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        handleAdd: function(index)
        {
            this.list[index].count++
        },
        handleRemove:function(index)
        {
            this.list.splice(index,1);
        }
    }
});