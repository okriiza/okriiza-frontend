<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3">
          <p><span class="text-pink text-nama">Halo</span>, Nama Saya</p>
          <VueWriter
            class="fs-2 text-biru title-nama txt-rotate"
            :array="['Rendi Okriza Putra.', 'I build things for the web.']"
            :eraseSpeed="50"
            :typeSpeed="100"
            :caret="underscore"
          />
          <p class="text-nama">
            Saya seorang <span class="fw-bold">Full Stack Developer</span> yang
            suka membangun dan merancang sesuatu yang berhubungan dengan
            teknologi
            <!-- I’m a software engineer
            specializing in building (and occasionally designing) exceptional
            digital experiences. -->
          </p>
          <button class="btn btn-bg-biru me-1">MY WORK</button>
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
