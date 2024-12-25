<template>
    <div class="not-found-container">
        <div class="not-found">
            <h1 class="animate__animated animate__fadeIn">404</h1>
            <p class="animate__animated animate__bounceInUp">Sahifa topilmadi!</p>
            <p class="animate__animated animate__fadeIn animate__delay-1s">
                Kiritgan manzilingiz mavjud emas. Iltimos, boshqa manzilni tekshirib ko'ring.
            </p>
        </div>
    </div>
</template>

<script setup>
// Bu yerda Vue JS kodingiz bo'lishi mumkin, lekin hozirgi kunda faqat animatsiyalarni ko'rsatyapmiz
</script>

<style scoped>
/* 404 sahifasi uchun umumiy uslublar */
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
    font-family: Arial, sans-serif;
}

.not-found {
    text-align: center;
    color: #333;
}

.not-found h1 {
    font-size: 100px;
    font-weight: bold;
    color: #ff5733;
}

.not-found p {
    font-size: 20px;
    color: #555;
}

/* Animatsiyalarni qo'llash uchun kerakli uslublar */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

/* Add a little more style to the container */
.not-found-container {
    background-color: #f0f0f0;
}
</style>