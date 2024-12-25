<template>
  <div class="bg-gray-900 text-gray-200 py-10">
    <!-- Karusel Bo'limi -->
    <section class="container mx-auto px-6 lg:px-20 mb-10">
      <Splide :options="{
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: false,
        pagination: true,
      }" aria-label="Main Carousel">
        <SplideSlide v-for="(slide, index) in slides" :key="index">
          <div class="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
            :style="{ backgroundImage: `url(${slide.image})` }">
            <div class="h-full bg-black bg-opacity-50 flex items-center justify-center">
              <h2 class="text-gray-100 text-2xl lg:text-4xl font-bold text-center">
                {{ slide.title }}
              </h2>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>

    <!-- Kartalar Bo'limi -->
    <section class="container mx-auto px-6 lg:px-20 mb-10">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-100">Our Services</h2>
        <p class="text-gray-400 mt-2">
          Explore our core services tailored to meet your needs.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(card, index) in cards" :key="index"
          class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
          <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover" />
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-100">{{ card.title }}</h3>
            <p class="text-gray-400 mt-2">{{ card.description }}</p>
            <a :href="card.link" class="mt-4 inline-block text-blue-400 hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Kompaniya Haqida -->
    <section class="container mx-auto px-6 lg:px-20 mb-10">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-100">What We Can Do for You</h2>
        <p class="text-gray-400 mt-2">
          Our team specializes in delivering innovative solutions that empower
          businesses to reach their full potential. Whether you need a robust
          marketing strategy, state-of-the-art IT solutions, or creative design
          services, we are here to bring your vision to life. With a focus on
          quality, efficiency, and client satisfaction, we are committed to
          exceeding your expectations.
        </p>
      </div>
    </section>

    <!-- Contact Bo'limi -->
    <section class="container mx-auto px-6 lg:px-20 mb-10">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-100">Contact Us</h2>
        <p class="text-gray-400 mt-2">We'd love to hear from you. Get in touch!</p>
      </div>
      <form class="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4" @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" v-model="contactForm.name"
            class="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400" />
          <input type="email" placeholder="Your Email" v-model="contactForm.email"
            class="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400" />
        </div>
        <textarea placeholder="Your Message" v-model="contactForm.message"
          class="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400" rows="4"></textarea>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-gray-100 font-bold py-3 rounded-md">
          Send Message
        </button>
      </form>
    </section>

    <!-- Hamkor Kompaniyalar Logosi -->
    <section class="container mx-auto px-6 lg:px-20">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-100">Our Partners</h2>
        <p class="text-gray-400 mt-2">
          Proudly working with industry leaders.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img v-for="(logo, index) in partnerLogos" :key="index" :src="logo" alt="Partner Logo"
          class="w-24 h-24 object-contain bg-gray-800 p-2 rounded-full mx-auto" />
      </div>
    </section>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  name: "HomePage",
  components: { Splide, SplideSlide },
  data() {
    return {
      slides: [
        { image: "/src/assets/nav-b/nav-t-m.png", title: "ТАРГЕТОЛОГ ️ МАРКЕТОЛОГ" },
        { image: "/src/assets/smm-img/ai.png", title: "AI Chat is an AI" },
        { image: "/src/assets/nav-b/we.png", title: "Manage your company profile" },


      ],
      cards: [
        {
          image: "/src/assets/smm-img/mar-stg.png",
          title: "Marketing Strategy",
          description: "Learn what a marketing strategy is, how it works, and how to create one for your business.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/IT_Solution.png",
          title: "IT Solutions",
          description: "IT Solutions Union specializes in the implementation of IT systems.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/ciber.png",
          title: "Cyber Security",
          description: "Cyber Security of the Republic of Uzbekistan",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/Android-vs-iOS-scaled.png",
          title: "Android and Apple's iOS",
          description: "Compare and contrast the features, advantages and disadvantages of Android and iOS, the two most popular mobile operating systems.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/vue.png",
          title: "Difference Between Vue and React",
          description: "React and Vue are JavaScript frameworks that are used to develop web applications.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/laravel.png",
          title: "Laravel, a powerful PHP framework,",
          description: " Laravel, a renowned open-source PHP framework, has emerged as a top contender due to its impressive features and growing popularity. ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/ai.png",
          title: "AI Chat is an AI",
          description: "AI Chat is an AI chatbot that writes text. You can use it to write stories, messages, or programming code. You can use the AI chatbot as a virtual tutor in almost any subject. ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/tg-web.png",
          title: "Telegram App Web Menu",
          description: "Telegram currently supports seven different ways of launching Mini Apps: the main … ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/tg-bot.png",
          title: "Telegram Bot",
          description: "Learn how to create and use bots on Telegram, small applications that run within the app and interact with users through flexible interfaces.  ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/p-m.png",
          title: "Project Manager",
          description: "A project manager is responsible for the implementation of any projects that people do together. ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/b-a.png",
          title: "Business Analyst",
          description: "A specialist who identifies problems and develops ways to solve or optimize them. ",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/vi.png",
          title: "Videographer",
          description: "Jack of all trades. In simple terms, he replaces several workers at once: a videographer, an editor, a scriptwriter, a lighting and sound specialist, an author and a director.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/mob.png",
          title: "Mobilografiya",
          description: "This includes electronic devices with built-in digital cameras that were not originally intended for professional photography, such as mobile phones, personal digital assistants, compasses, and binoculars.",
          link: "/projects",
        },
        {
          image: "/src/assets/smm-img/t-g.png",
          title: "TARGET SPECIALIST ️ MARKETING ",
          description: "A targetologist is a specialist who sets up, manages, and optimizes social media advertising aimed at a specific target audience.",
          link: "/projects",
        },
      ],
      partnerLogos: [
        "/src/assets/img/milliyavto.jpg", 
         "/src/assets/img/tuo.png",
         "/src/assets/img/toshInevst.png",
         "/src/assets/img/gl.png",
         "/src/assets/img/insof-bilan.png",
         "/src/assets/img/a7-hostel.png",
         "/src/assets/img/openshop.png",
         "/src/assets/img/nge.png",
         "/src/assets/img/zty.png",


      ],
      contactForm: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.contactForm.name}! We'll get back to you soon.`);
      this.contactForm = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
/* Maxsus uslublar kerak bo'lsa shu yerda yozing */
</style>
