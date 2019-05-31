function isValueNumber(value)
{
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value);
}

Vue.component('input-number',{
    template: '#my-number', //配置的模板
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data: function(){
        return { currentValue: this.value };
    },
    watch: {
        currentValue: function(val){ //名字对应
            this.$emit("input", val);
        },
        value: function(val)
        {
            this.updateValue(val);
        }
    },
    methods: {
        handleDown: function(){
            if(this.currentValue<=this.min) return;
            this.currentValue-=1;
        },
        handleUp: function(){
            if(this.currentValue>=this.max) return;
            this.currentValue+=1;
        },
        handleChange: function(event){
            var val = event.target.value.trim();
            if(isValueNumber(val))
            {
                val = Number(val);
                this.currentValue = val;
                if(val > this.max)
                {
                    this.currentValue = this.max;
                }else if(val < this.min)
                {
                    this.currentValue = this.min;
                }
            }else{
                event.target.value = this.currentValue;
            }
        },
        updateValue: function(val){
            if(val > this.max) val = this.max;
            if(val <this.min) val = this.min;
        }
    },
    mounted: function(){
        this.updateValue(this.value);
    }
});