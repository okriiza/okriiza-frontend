<template>
  <header style="background-imaga: url('../assets/image/ffflux.svg')">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3">
          <p><span class="text-pink text-nama">Hallo</span>, my name is</p>
          <VueWriter
            class="fs-2 text-biru title-nama txt-rotate"
            :array="[
              'Rendi Okriza Putra.',
              'Rendi Okriza Putra.',
              'Rendi Okriza Putra.',
              'Rendi Okriza Putra.',
              'Rendi Okriza Putra.',
            ]"
            :eraseSpeed="50"
            :typeSpeed="100"
            :caret="underscore"
          />
          <p class="text-nama">
            I am a freelance full Stack web developer , I am a student and I
            Love Playing Games.
          </p>
          <button class="btn btn-bg-biru me-1">MY WORK</button>
          <button class="btn btn-bg-biru-outline ms-1">CONTACT</button>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/image/header.png"
            class="img-fluid"
            width="540"
            height="350"
            alt="Image Header"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import VueWriter from 'vue-writer'
</script>
