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
            <i class="fa-solid fa-globe"></i>
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
          image: "/assets/img/milliyavto.jpg",
          companyName: "MilliyAvto",
          description: "Web-Sayt qilib berganmiz",
          startDate: "2017-05-01",
          endDate: "2019-06-01",
          instagram: "https://www.instagram.com/milliy_avto_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "https://milliyavto.uz",

          showDetails: false,
        },
        {
          id: 2,
          image: "/assets/img/tuo.png",
          companyName: "TUO-Motors",
          description: "SMM va Web-Ilovalar ",
          startDate: "2022-04-10",
          endDate: "2025-12-09",
          instagram: "https://www.instagram.com/tuomotors.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "https://tuo-motors.netlify.app/",
          showDetails: false,
        },
        {
          id: 3,
          image: "/src/assets/img/toshInevst.png",
          companyName: "Toshkent-Invest",
          description: "Web-Sayt va E-Auksion API",
          startDate: "2022-04-10",
          endDate: "2028-04-10",
          instagram: "https://www.instagram.com/toshkentinvest.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "projects.toshkentinvest.uz",
          showDetails: false,
        },
        {
          id: 4,
          image: "/src/assets/img/gl.png",
          companyName: "GL-Motors",
          description: "Smm,Marketing,Analitika",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/glmotors_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedin: "gl-motors.uz",
          showDetails: false,
        },
        {
          id: 5,
          image: "/src/assets/img/insof-bilan.png",
          companyName: "Insof-Bilan",
          description: "Bizni kichik project",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/insof_bilan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          showDetails: false,
        },
        {
          id: 6,
          image: "/src/assets/img/a7-hostel.png",
          companyName: "A7-Hostel",
          description: "Mexmonxona web-sayt",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/a7_hostel_n1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "http://hostell.uz/",
          github: "https://github.com/portfolio2",
          showDetails: false,
        },
        {
          id: 7,
          image: "/src/assets/img/openshop.png",
          companyName: "OpenShop",
          description: "Online Market",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/openshop_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedin: "https://www.openshop.uz",
          showDetails: false,
        },
        {
          id: 8,
          image: "/src/assets/img/nge.png",
          companyName: "NGE-Motors",
          description: "Marketing Analitika Smm",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/nge_auto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          showDetails: false,
        },
        {
          id: 9,
          image: "/src/assets/img/zty.png",
          companyName: "ZTY Car Energy",
          description: "Brend-In Market-In Analitik Smm",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/zty_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          web: "https://t.me/ztycarenergy",
          showDetails: false,
        },
        {
          id: 10,
          image: "/src/assets/img/elq2.png",
          companyName: "ELQ Banking System",
          description: "Web App",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          web: "https://elqbanking.uz/",
          showDetails: false,
        },
        {
          id: 11,
          image: "/src/assets/img/anvar-a.png",
          companyName: "Anvar Avto-Kredit",
          description: "SMM Marketing",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/anvar_avto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          showDetails: false,
        },
        {
          id: 12,
          image: "/src/assets/img/olam-avto.png",
          companyName: "Olam Avto-Kredit",
          description: "SMM Marketing",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/olamavto_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          showDetails: false,
        },
        {
          id: 13,
          image: "/src/assets/img/elpar.png",
          companyName: "Elparvar Avto-Kredit",
          description: "SMM Marketing",
          startDate: "2022-04-10",
          endDate: "2022-12-15",
          instagram: "https://www.instagram.com/elparvar_avtokredit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
