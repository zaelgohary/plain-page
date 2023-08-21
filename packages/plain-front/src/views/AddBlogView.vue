<template>
  <form>
    <v-text-field
      v-model="state.title"
      :error-messages="v$.title.$errors.map(e => e.$message)"
      :counter="10"
      label="Title"
      required
      @input="v$.title.$touch"
      @blur="v$.title.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.subtitle"
      :error-messages="v$.subtitle.$errors.map(e => e.$message)"
      label="Subtitle"
      required
      @input="v$.subtitle.$touch"
      @blur="v$.subtitle.$touch"
    ></v-text-field>

    <VTextarea
      v-model="state.body"
      :error-messages="v$.body.$errors.map(e => e.$message)"
      label="Body"
      required
      @input="v$.body.$touch"
      @blur="v$.body.$touch"
    >

    </VTextarea>

    <v-btn
      class="me-4"
      @click="v$.$validate"
    >
      Add Post
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { not, required } from '@vuelidate/validators'

  const initialState = {
    title: '',
    subtitle: '',
    body: ''
  }

  const state = reactive({
    ...initialState,
  })


  const rules = {
    title: { required },
    subtitle: { not },
    body: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
</script>
