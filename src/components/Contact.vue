<template>
  <div class="w-full h-full">
    <Navbar />

    <div class="flex m-4 pl-20">
      <ul v-for="c in contacts" :key="contacts.id" class="">
        <li>
          Email:
          <br />
          {{ c.Email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Contact',
  components: {
    Navbar,
  },

  data() {
    return {
      contacts: [{ id: 1, Email: 'kamolwish2000@gmail.com' }],
    };
  },
};
</script>
