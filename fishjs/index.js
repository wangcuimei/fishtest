var app = new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,
                name:"item1",
                price:200,
                count:1,
                checked:true
            },
            {
                id:2,
                name:"item2",
                price:150,
                count:2,
                checked:false
            },
            {
                id:3,
                name:"item3",
                price:200,
                count:2,
                checked:true
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var price = 0;
            for(var i=0; i<this.list.length; i++)
            {
                var item = this.list[i];
                if(item.checked){
                    price += item.price* item.count;
                }
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
        },
        check:function(index)
        {
            this.list[index].checked = !this.list[index].checked;
        },
        checkAll: function(e)
        {
            //var checkObj = document.querySelectorAll(".checkItem");
            if(e.target.checked)
            {
                this.list.forEach(item=>{
                    item.checked=true;
                });
            }else{
                this.list.forEach(item=>{
                    item.checked=false;
                });
            }
        }
    }
});