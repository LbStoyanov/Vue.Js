<template>
    <div>
        <button @click="getAccountInfo">Get account information!</button>
    </div>
</template>

<script>
import * as DropboxSign from "@dropbox/sign";

    export default {
        data(){
            return {

            }
        },
        methods:{
            getAccountInfo(){
                    console.log('Test');
                    const accountApi = new DropboxSign.AccountApi();
                    accountApi.username = "YOUR_API_KEY";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>