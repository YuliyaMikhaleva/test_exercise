import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    organizations: [
      {
        name: 'ПГНИУ',
        address: 'Пермь',
        ogrn: 12345,
        inn: 12345678,
        date: '01.01.1925'
      }
    ]
  },
  getters:{
    getList(state){
      return state.organizations
    }
  },
  mutations: {
    //добавить новую организацию
    addNewOrganization(state, good){
      const product = Object.assign (good)
      state.organizations.push(product)
    },
    deleteOrganization(state, good){
      let find = state.organizations.find((element) => element.name === good.name);
      this.state.organizations.splice(state.organizations.indexOf(find),1);
      console.log(state.organizations)
    },
    setListOrganizations(state,payload) {
      const newArray = [...payload.map((element) => {
        return {
          name: element.value,
          address: element.data.address.value,
          ogrn: element.data.ogrn,
          inn: element.data.inn,
          date: element.data.state.registration_date,
        }
      })]
      console.log(...newArray);
      state.organizations = state.organizations.concat(newArray)
      console.log(state.organizations)
    }
  },
  actions: {
    loadListOrganizations({commit}){//передаем объекь для работы со стейтом, и с помощью деструктуризации передаем метод этого объекта - commit - вызывает какие-то мутации
      var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
      var token = "f7193339797e7582ab0fe52a42d1140f99bbf64f";
      var query = "7707083893";

      var options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
      }
      fetch(url, options)
          .then(response => response.json())
          .then(result => {
            console.log(result.suggestions);
            commit('setListOrganizations',result.suggestions)
          })
          .catch(error => console.log("error", error));
    },
  },
  // // плагин для сохранения состояния конкретных ключей (у нас нет бэка, поэтому нужен плагин)
  plugins: [
    createPersistedState({
      paths:['organizations']
    }),
  ],
})
