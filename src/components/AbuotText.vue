<template>
  <div class="bg-gray-900 text-gray-200 py-10">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Page Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-100">About Us</h1>
        <p class="text-gray-300 mt-4">
          Discover our story, team, and commitment to excellence.
        </p>
      </div>

      <!-- Mission and Values Section -->
      <div class="bg-gray-900 text-gray-200 py-10">
        <div class="container mx-auto px-6 lg:px-20">
          <!-- Mission and Values Section -->
          <div class="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg shadow-xl p-12 mb-10">
            <h2 class="text-3xl font-semibold text-white mb-6 text-center">Our Mission</h2>
            <p class="text-gray-200 text-lg leading-relaxed">
              Biz sizga arzon va sifatlim ishni taklif qilsih uchun ishlab chiqligan har tonlaman o'ylangan
              loyihalarni taklif qilmiz. Bizda siz ko'magan kamchilikarga yechimlar optimal muamolar o'rgib chiqsh uhcun ish olib boramiz
            </p>
          </div>
        </div>
      </div>

      <!-- Image Tiles Section -->
      <div class="card-page">
        <div class="container mx-auto px-6 lg:px-20">
          <!-- Image Tiles Section -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(image, index) in images" :key="index"
              class="overflow-hidden rounded-lg bg-white shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div class="relative">
                <img :src="image.src" :alt="image.alt" class="w-full h-48 object-cover rounded-t-lg" />
                <div class="absolute inset-0 bg-black opacity-30"></div> <!-- Dark shadow overlay -->
              </div>
              <div class="p-6 relative z-10">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ image.title }}</h3>
                <p class="text-sm text-gray-600">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Company History Section -->
      <div class="bg-gray-900 text-gray-200 py-10">
        <div class="container mx-auto px-6 lg:px-20">
          <!-- Company History Section -->
          <div class="bg-gradient-to-r from-green-500 via-teal-600 to-blue-700 rounded-lg shadow-xl p-12 mb-10">
            <h2 class="text-3xl font-semibold text-white mb-6 text-center">Kompaniya tarixi</h2>
            <p class="text-gray-200 text-lg leading-relaxed mb-4">
              Biz ishimizni 2014-yildan boshlab Olib boramiz shu hzoigi payitgachan ko'p hamkor, kompaniyalr bilan birga ishlab kelamiz.
              Hozirgi payitgachan bizni hamkorlar ish faolyatida va sihlamoqda biz bilan ish davomida ko'pal mojorolar duch kelgan lekin shun bilan birga,
              biz ularni ishonchini hali beri yo'qotaganiimizcha yo'q. Biz Openshop,Toshket-Invest,MiliyAvto va boshqa shunga ohshgan korhonalrga 
              oz biznisini rivojlantirish uchun yordam berib kelamiz bizda It mutahasilari,Kino Produsing yo'nalishlari,Kiber hafsizlig yo'nalsihalri,Mobil 
              va SMM yo'nalsihalri bilan ham ishlaymiz.
              IT-Doctor Kompaniyasi shu bilan birgalikda hamorlarimiga patemal yechimlar bilan yonadhsgn holda baozr va iqsodiyo bialn birga yondashmaiz
              va bu bilan biz qo'ldan kegancha bitta kompaniya bilan barcha usuldagi momolarni hal qilamiz
              IT-Doctor asoschisi "Otabek Lazizochi" Tomonidan asos solinga bu loyiha ko'p mumolarni hal qilsih uhcun ishlab chiqilgan bo'lib
              harhil vada berib ish qilb bermaydigan kompaniyalrni oldini olish uchun ishlab chiqlgan bir loyiha dir. 
            </p>
            <p class="text-gray-200 text-lg leading-relaxed mb-4">
              Biz ish boshlagan sana 2014-yildan beri ishlab kerldi va hozigi payitgachan ish faolyatida
            </p>
            <p class="text-gray-200 text-lg leading-relaxed">
              Biz faqat siz uchun to'g'ri yechi bera olamiz !
            </p>
          </div>
        </div>
      </div>

      <!-- Call-to-Action Section -->
      <div class="bg-gradient-to-r  to-teal-500 py-16">
        <div class="container mx-auto px-6 lg:px-20 text-center text-white">
          <!-- Call-to-Action Section -->
          <div class="max-w-3xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-xl">
            <h2 class="text-3xl font-semibold mb-6">Hamkorlar Diqatiga</h2>
            <p class="text-lg mb-6">
              Bu loyohalar riyal ishlar tomonidan qilingan va biz hechkimdan qilganmiz deyb aldamaymiz shunga etibor qiling bizni project larimini ko'rish uhcun ushbu tugmani bosib ko'rishingiz mumkun
            </p>
            <a href="/projects"
              class="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
              Ko'rish uchun
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/src/assets/img/milliyavto.jpg",
          alt: "Team Collaboration",
          title: "MilliAvto MCHJ",
          description: "Bizga bu kompniya aloqga chiqib bizga elktorn avtosalon qilb berishimizni iltimos qilgan",
        },
        {
          src: "/src/assets/img/gl.png",
          alt: "Innovation",
          title: "GL-Motors MCHJ",
          description: "Biz bularga biznes struktur qilib ishin rivjlantirb berishimizni so'ragan SMM paketimmizni sotib olgan",
        },
        {
          src: "/src/assets/img/toshInevst.png",
          alt: "Customer Support",
          title: "Toshkent-Invest",
          description: "Biz korxonga web ilova va yerlarni E-Auksiyondan bo'sh joylarni ko'rish uhcun yaratib berganmiz",
        },
        {
          src: "/src/assets/img/elq2.png",
          alt: "Growth",
          title: "ELQ Banking System",
          description: "Biz bularga web ilova yaratib  berganmiz uslar bankomatlar qayerda va qanday joylashnani to'g'risda va sotuv uchun bizga chiqishgan",
        },
        {
          src: "/src/assets/img/olam-avto.png",
          alt: "Dedication",
          title: "Olam Avto",
          description: "Biz bu inson bilan shaxsiy breding va sotuvni rivojlantirshni qilb berishimizni tiltimo qilshgan",
        },
        {
          src: "/src/assets/img/openshop.png",
          alt: "Team Spirit",
          title: "Openshop App",
          description: "OPENSHOP App ilovasi ishlab chilishdan mahas electron qurulmalarni sotish va mobilashtirishni amalga oshhirish uchun ishlab chiqligan loyiha dir uni bizning ishchlar bunga yechim topshgan",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
