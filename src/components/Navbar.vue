<template>
  <div
    class="
      border border-black
      flex
      justify-center
      bg-black
      text-white
      font-bold
    "
  >
    <v-btn @click="$router.push('/')">
      <p class="m-2">Profile</p>
    </v-btn>
    <v-btn @click="$router.push('/contact')">
      <p class="m-2">Contact</p>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
