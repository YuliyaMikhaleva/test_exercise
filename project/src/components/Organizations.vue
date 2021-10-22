<template>
    <div>
        <Organization v-bind:key="item.inn"
                      v-for="item of organizations"
                      v-bind:item="item"
        />
    </div>
</template>

<script>
    import Organization from "./Organization";
    export default {
        name: "Organizations",
        components: { Organization },
        computed:{
            organizations(){
                return this.$store.getters.getList
            }
        }

    }
</script>

<style scoped>

</style>