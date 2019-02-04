<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Login</h1>
        
        <v-text-field
          label="Email"
          placeholder="Email..."
          :value="loginEmail"
          @input="setLoginEmail"
        ></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Password..."
          type="password"
          autocomplete="new-password"
          :value="loginPassword"
          @input="setLoginPassword"
        ></v-text-field>
        <v-alert type="error" :value="loginError">{{ loginError }}</v-alert>
<<<<<<< HEAD
        <v-btn color="blue-grey darken-2" dark @click="login">
=======
        <v-btn color="blue-grey dark-2" dark @click="login">
>>>>>>> e893d69de99fe7328f3cf5a683c1541c947a53ea
          <v-icon>fingerprint</v-icon>Login
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', ['loginEmail', 'loginPassword', 'loginError']),
  },
  methods: {
    ...mapMutations('authentication', ['setLoginEmail', 'setLoginPassword']), // able to call this functions in this component

    ...mapActions('authentication', ['login']),
  },
};
</script>

<style>
</style>
