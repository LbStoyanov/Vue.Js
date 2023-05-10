<template>
    <div>
        <button @click="getAccountInfo">Get account information!</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            getAccountInfo(){
                    console.log('Test');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>