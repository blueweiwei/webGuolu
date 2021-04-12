<template>
    <div>
        <Input v-model="value18" type="text" password placeholder="Enter something..." style="width: 200px" />
        <Button type="primary" @click="weiweis()">Submit</Button>
        

    </div>
</template>
<script>
    export default {
        data () {
            return {
                value18: ''
            }
        },
        created(){
            this.getParams()
        },
        methods:{
             weiweis(){
                 alert('123')
             },
             getParams(){
                 var routerParam=this.$route.query.data
                 console.log(routerParam)
             }

         }
    }
</script>
