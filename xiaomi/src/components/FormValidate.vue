<template>
  <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
    <Radio v-model="single">Radio</Radio>
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name">
    </p>

    <p>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="age" min="0">
    </p>

    <p>
      <label for="movie">Favorite Movie</label>
      <select name="movie" id="movie" v-model="movie">
        <option>Star Wars</option>
        <option>Vanilla Sky</option>
        <option>Atomic Blonde</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</template>
<script>
import { Radio } from 'iview'
export default {
  el: '#app',
  data () {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null,
      singal: false
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) return true
      this.errors = []
      if (!this.name) this.errors.push('Name required.;')
      if (!this.age) this.errors.push('Age required.')
      e.preventDefault()
    }
  }
}
</script>

<style>
input,
select {
  margin-left: 10px;
}
</style>
