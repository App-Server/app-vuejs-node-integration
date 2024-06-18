<template>
  
  <div id="app">
    <div class="hello">
    <h1>{{ message }}</h1>
  </div>
    <h1>Hello App!</h1>
    <p>
      <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
    </p>
    <nav>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'Loading...'
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error('There was an error fetching data:', error);
      });
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin: 0;
}
</style>
