<template>
   <HomeTriger />
</template>

<script>
import HomeTriger from "@/components/HomeTriger.vue";

export default {
  name: "HomePage",
  components: {
    HomeTriger,
  },
  data() {
    return {
      receivedInfo: "", // Ma'lumotni saqlash uchun
    };
  },
  methods: {
    handleInfo(info) {
      // HomeTriger dan kelgan ma'lumotni olish
      this.receivedInfo = info;
    },
  },
};
</script>

<style scoped>
/* Ko'rsatish uchun yumshoq soyalar va o'tish effektlari */
h1 {
  transition: transform 0.2s ease-in-out;
}
h1:hover {
  transform: scale(1.05);
}

p {
  line-height: 1.6;
}
</style>
