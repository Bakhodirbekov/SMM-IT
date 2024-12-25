<template>
  <div class="min-h-screen bg-gradient">
    <AboutText />
  </div>
</template>

<script>
import AboutText from "../components/AbuotText.vue"
export default {
  name: "AboutPage",
  components: {
    AboutText,
  },
  data() {
    return {
      receivedInfo: "", // Ma'lumotni saqlash uchun
    };
  },
  methods: {
    handleInfo(info) {
      // AboutText-dan kelgan ma'lumotni olish
      this.receivedInfo = info;
    },
  },
};
</script>

<style scoped>
/* Sarlavha va interfeysga dinamik effektlar qo'shish */
h1 {
  transition: transform 0.3s ease-in-out;
}
h1:hover {
  transform: scale(1.1);
}

p {
  line-height: 1.75;
}
</style>
