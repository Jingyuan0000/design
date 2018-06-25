<template>
  <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
      </ul>
    </p>

    <label for="gender">Gender</label>
    <p><input type="radio" name="female" id="female">Female</p>
    <p><input type="radio" name="male" id="male" checked="checked">Male</p>

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
export default {
  el: '#app',
  data () {
    return {
      errors: [],
      gender: null,
      age: null,
      movie: null,
      singal: false
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.gender && this.age) return true
      this.errors = []
      if (!this.gender) this.errors.push('Gender required.;')
      if (!this.age) this.errors.push('Age required.')
      e.preventDefault()
    },
    change: function () {
      var f = document.getElementById('female')
      var m = document.getElementById('male')
      if (f.checked === true) {
        m.checked = false
      } else { m.checked = true }
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
