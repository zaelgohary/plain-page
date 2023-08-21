<template>
  <form>
    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      :counter="10"
      label="Email"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.password"
      :error-messages="v$.password.$errors.map(e => e.$message)"
      label="Password"
      required
      @input="v$.password.$touch"
      @blur="v$.password.$touch"
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="v$.$validate"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, required } from '@vuelidate/validators'

  const initialState = {
    email: '',
    password: '',
  }

  const state = reactive({
    ...initialState,
  })


  const rules = {
    email: { required, email },
    password: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
</script>