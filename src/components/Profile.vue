<template>
  <div class="w-full h-full">
  
  <Navbar/>

  <div
    v-for="p in profiles"
    :key="profiles.id"
    class="flex m-4 pl-20"
  >
    <div class="">
      Name:
      <br>
      {{ p.firstName}}
      <br>
      {{ p.lastName }}
    </div>
    <div class="pl-8">
      Age:
      <br>
      {{ p.age }}
    </div>

  </div>
  <div v-for="p in profiles" :key="profiles.id" class="flex m-4 pl-20">
    <div class=>
      University:
      <br>
      {{ p.university }}
    </div>
    <div class="pl-8">
    Skill:
    <br>
      {{ p.skill }}
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Profile',
  components: {
  
    Navbar,
  },

  data() {
    return {
      profiles: [
        {
          id: 1,
          firstName: 'Kamolwish',
          lastName: 'Woramethaleot',
          age: '22',
          university: 'KMUTT',
          skill: 'Font-End, Database, PC Build',
        },
      ],
    };
  },
};
</script>
