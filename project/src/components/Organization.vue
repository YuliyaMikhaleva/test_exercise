<template>
    <div>
        <div class="table">
            <div class="table_block_firm"><span>{{item.name}}</span></div>
            <div class="table_block_firm">
                    <textarea class="table_block_input" type="text" :value="item.address" name="" id="" ></textarea>
            </div>
            <div class="table_block_firm"><span>{{item.ogrn}}</span></div>
            <div class="table_block_firm"><span>{{item.inn}}</span></div>
            <div class="table_block_firm"><span>{{item.date}}</span></div>
            <button @click="deleteOrganization" class="table_block_delete">Удалить организацию</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Organization",
        props:['item'],
        data(){
          return{
              tagEditingId:'2',
              edit: false
          }
        },
        methods:{
            deleteOrganization(){
                this.$store.commit('deleteOrganization',this.item)
                console.log(this.$store.state.organizations)
            },
        }
    }
</script>

<style scoped>

</style>