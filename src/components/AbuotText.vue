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
              At our core, we strive to innovate and deliver high-quality solutions to meet the unique needs of our
              clients. Our mission is to empower businesses through creative problem-solving and cutting-edge
              technology. We are committed to delivering excellence in everything we do, ensuring that our clients
              receive the best service possible.
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
            <h2 class="text-3xl font-semibold text-white mb-6 text-center">Company History</h2>
            <p class="text-gray-200 text-lg leading-relaxed mb-4">
              Established in 2015, our company began with a vision to deliver unparalleled services to our clients. Over
              the years, we have grown into a trusted name in the industry, known for our commitment to excellence and
              innovation.
            </p>
            <p class="text-gray-200 text-lg leading-relaxed mb-4">
              From our humble beginnings to becoming a leader in our field, every step of our journey has been marked by
              dedication and a passion for making a difference. Today, we continue to push boundaries, embracing new
              challenges and opportunities to serve our clients better.
            </p>
            <p class="text-gray-200 text-lg leading-relaxed">
              Our story is not just about achievements; it's about the people who make it possible – our team, partners,
              and clients. Together, we are shaping the future and leaving a lasting impact on the world.
            </p>
          </div>
        </div>
      </div>

      <!-- Call-to-Action Section -->
      <div class="bg-gradient-to-r  to-teal-500 py-16">
        <div class="container mx-auto px-6 lg:px-20 text-center text-white">
          <!-- Call-to-Action Section -->
          <div class="max-w-3xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-xl">
            <h2 class="text-3xl font-semibold mb-6">Join Our Journey</h2>
            <p class="text-lg mb-6">
              We welcome collaborators, partners, and clients who share our vision of creating impactful solutions.
              Let’s work together to make a difference.
            </p>
            <a href="/contact"
              class="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
              Contact Us
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
          src: "https://via.placeholder.com/300",
          alt: "Team Collaboration",
          title: "Collaboration",
          description: "Working together to achieve great results.",
        },
        {
          src: "https://via.placeholder.com/300",
          alt: "Innovation",
          title: "Innovation",
          description: "Pioneering creative solutions for modern problems.",
        },
        {
          src: "https://via.placeholder.com/300",
          alt: "Customer Support",
          title: "Customer Support",
          description: "Providing unparalleled support to our clients.",
        },
        {
          src: "https://via.placeholder.com/300",
          alt: "Growth",
          title: "Growth",
          description: "Empowering businesses to reach new heights.",
        },
        {
          src: "https://via.placeholder.com/300",
          alt: "Dedication",
          title: "Dedication",
          description: "Committed to excellence in all that we do.",
        },
        {
          src: "https://via.placeholder.com/300",
          alt: "Team Spirit",
          title: "Team Spirit",
          description: "Fostering a collaborative and supportive environment.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
