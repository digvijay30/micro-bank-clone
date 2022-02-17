import Vue from 'vue';
import Vuex from 'vuex';
import jwt from 'jsonwebtoken';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      isClickProfile: false,
      token: localStorage.getItem('token')||null,
      useDetails:null
    },
    getters: {
      getClickProfileStatus(state) {
        return state.isClickProfile;
      },
      getToken(state) {
        return state.token;
      },
      getUserDetails(state)
      {
        const {userObject} = state.useDetails;
        return userObject;
      }
    },
    mutations: {
      updateStatus(state) {
        state.isClickProfile = !state.isClickProfile;
      },
      setToken(state, token) {
        state.token = token;
      },
      trackLogin(state)
      {
        if(state.token)
        {
          const token = state.token;
            jwt.verify(token,"dffgd%^)_)(*&^%%&", (err, decode) => 
            {
              if(err)
              {
                state.token = null;
                state.useDetails = null;
                return 0;
              }
              state.useDetails = decode;
            });
        }
      },
      logoutDetails(state)
      {
        localStorage.removeItem('token');
        state.useDetails = null;
        state.token = null;
      }
    },
    actions: {
      UPDATE_STATUS({ commit }) {
        commit("updateStatus");
      },
      
      SET_TOKEN({ commit }, token) {
        commit("setToken", token);
      },
      TRACK_LOGIN({commit})
      {
         commit('trackLogin');
      },
      LOGOUT({commit})
      {
         commit('logoutDetails');
      }
    },
  });
  
  export default store