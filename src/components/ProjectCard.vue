<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-1">
    <!-- Loyihalar ro'yxati (Projects Section) -->
    <div class="col-span-full text-center mb-6">
      <h1 class="text-3xl font-bold text-white dark:text-gray-900">Loyihalar</h1>
      <p class="text-gray-400 mt-2 dark:text-gray-900">Bizning muvaffaqiyatli loyihalarimiz</p>
    </div>
    <div v-for="project in projects" :key="project.id"
      class="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover rounded-lg" />

      <h2 class="text-xl font-semibold mt-4">{{ project.companyName }}</h2>
      <p class="mt-2 text-gray-400">{{ project.description }}</p>

      <div class="mt-4 flex items-center space-x-4">
        <button class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          @click="toggleDetails(project.id)">
          Ma'lumot ko'rish
        </button>
      </div>

      <!-- Loyihaning batafsil ma'lumotlari ko'rsatiladi -->
      <div v-if="project.showDetails" class="mt-6">
        <p class="mt-2"><strong class="text-gray-300">Boshlanish:</strong> {{ project.startDate }}</p>
        <p class="mt-2"><strong class="text-gray-300">Tugash:</strong> {{ project.endDate }}</p>
        <div class="mt-4 flex space-x-4">
          <a :href="project.instagram" target="_blank" class="text-blue-500 hover:text-blue-400">
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="project.web" target="_blank" class="text-blue-500 hover:text-blue-400">
            <i class="fab fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      projects: [
        {
          id: 1,
          image: "https://via.placeholder.com/300",
          companyName: "MilliyAvto",
          description: "Web-Sayt wilib berganmiz",
          startDate: "2015-05-01",
          endDate: "2018-06-01",
          instagram: "https://www.instagram.com/milliy_avto_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "https://milliyavto.uz",

          showDetails: false,
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300",
          companyName: "Design Studio",
          description: "React va Redux asosida yaratilgan onlayn do'kon",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/portfolio2",
          linkedin: "https://www.linkedin.com/in/portfolio2",
          github: "https://github.com/portfolio2",
          showDetails: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(projectId) {
      // Faqat bitta loyiha uchun batafsil ma'lumotni ochish yoki yopish
      this.projects.forEach((project) => {
        if (project.id === projectId) {
          project.showDetails = !project.showDetails;
        } else {
          project.showDetails = false;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Dark mode uchun qo'shimcha uslublar */
.bg-gray-900 {
  background-color: #1a202c;
}

.text-white {
  color: white;
}

.text-gray-400 {
  color: #a0aec0;
}

.text-gray-300 {
  color: #e2e8f0;
}

.text-blue-500 {
  color: #3182ce;
}

.text-blue-400 {
  color: #63b3ed;
}

.text-black {
  color: black;
}

.bg-blue-600 {
  background-color: #3182ce;
}

.bg-blue-700 {
  background-color: #2b6cb0;
}

button:hover {
  background-color: #2b6cb0;
}

button:focus {
  outline: none;
}

/* Optional: Add hover and focus states for social media links */
a:hover {
  color: #63b3ed;
}

i {
  transition: color 0.3s;
}
</style>
