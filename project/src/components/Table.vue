<template>
    <div>
        <h3 class="table_title">Таблица юридических лиц</h3>
        <button class="table_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</button>
        <button class="table_button" @click="getOrganizations">Загрузить по ИНН</button>

        <div class="table">
            <div class="table_block"><span>Наименование</span></div>
            <div class="table_block"><span>Адрес</span></div>
            <div class="table_block"><span>ОГРН</span></div>
            <div class="table_block"><span>ИНН</span></div>
            <div class="table_block"><span>Дата регистрации</span></div>
            <div class="table_block"><span></span></div>
        </div>
        <Organizations/>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Добавить компанию в таблицу</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table_info">
                            <label class="table_info_label" for="name">Наименование</label>
                            <input class="table_info_input" type="text" id="name" v-model="name">
                        </div>
                        <div class="table_info">
                            <label class="table_info_label" for="address">Адрес</label>
                            <input class="table_info_input" type="text" id="address" v-model="address">
                        </div>
                        <div class="table_info">
                            <label class="table_info_label" for="ogrn">ОГРН</label>
                            <input class="table_info_input" type="text" id="ogrn" v-model="ogrn">
                        </div>
                        <div class="table_info">
                            <label class="table_info_label" for="inn">ИНН</label>
                            <input class="table_info_input" type="text" id="inn" v-model="inn">
                        </div>
                        <div class="table_info">
                            <label class="table_info_label" for="date">Дата регистрации</label>
                            <input class="table_info_input" type="text" id="date" v-model="date">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addNewOrganization">Добавить организацию</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Organizations from "./Organizations";
    export default {
        name: "Table",
        components: {Organizations},
        data(){
            return{
                name: null,
                address: null,
                ogrn: null,
                inn: null,
                date: null,
            }
        },
        methods:{
            addNewOrganization(){
                const element = Object.assign({
                    name: this.name,
                    address: this.address,
                    ogrn: this.ogrn,
                    inn: this.inn,
                    date: this.date
                })
                this.$store.commit('addNewOrganization',element)
                console.log(this.$store.state.organizations)
            },
            getOrganizations(){
                this.$store.dispatch('loadListOrganizations');
                this.$store.getters.getList
            }
        },

    }
</script>

<style scoped>

</style>