<template>
  <component :is="Header" />
  <div>
    <section class="section-about-me">
      <div class="container">
        <div class="text-center mb-5">
          <p class="text-biru sub-title-about">About</p>
          <h2 class="title-about">About Me</h2>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
        </div>
        <div class="row align-items-center">
          <div
            class="col-md-6 mb-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="@/assets/image/about.png" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <p
              class="text-justify text-about"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Website ini di buat untuk menampilkan hasil dari project yang
              pernah saya kerjakan dan terdapat blog yang berisikan artikel,
              yang mana di artikel tersebut saya akan sharing mengenai hal apa
              yang saya suka dan saya pelajari.
            </p>
            <table
              data-aos="fade-up"
              data-aos-duration="2000"
              class="text-about"
            >
              <tr>
                <td><i class="fas fa-user-tie text-biru"></i> Nama</td>
                <td class="font-weight-bold">: Rendi Okriza Putra</td>
              </tr>
              <tr>
                <td><i class="fas fa-envelope text-biru"></i> Email</td>
                <td class="font-weight-bold">: okriizaa@gmail.com</td>
              </tr>
            </table>
            <h4
              class="mt-4 font-weight-bold"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              My Interests
            </h4>
            <div
              class="list-interests"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span class="font-weight-bold me-2"
                ><i class="fas fa-headphones-alt text-biru"></i> Music</span
              >
              <span class="font-weight-bold me-2"
                ><i class="fas fa-suitcase text-biru"></i> Travel</span
              >
              <span class="font-weight-bold me-2"
                ><i class="fas fa-film text-biru"></i> Movie</span
              >
              <span class="font-weight-bold me-2"
                ><i class="fas fa-camera-retro text-biru"></i> Photo</span
              >
              <span class="font-weight-bold me-2"
                ><i class="fas fa-hiking text-biru"></i> Hiking</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-service">
      <div class="container">
        <div class="text-center mb-5 pt-4">
          <p class="text-kuning sub-title-service">Service</p>
          <h2 class="title-service">My Best Service</h2>
          <!-- <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> -->
        </div>
        <div
          class="row list-service align-items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div
            class="col-md-4 text-white text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <div class="icon">
              <i class="fas fa-code"></i>
            </div>
            <h5 class="title-service">Backend Web Development</h5>
            <p class="text-service mx-4">
              Back-end adalah bagian belakang layar, Bahasa pemrograman untuk
              back-end diantaranya adalah PHP, Ruby, Python, dan banyak lainnya.
            </p>
          </div>
          <div
            class="col-md-4 text-white text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <div class="icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h5 class="title-service">Frontend Web Development</h5>
            <p class="text-service mx-4">
              Front-end adalah bagian yang langsung dilihat oleh user. Dibangun
              menggunakan HTML, CSS, dan JavaScript
            </p>
          </div>
          <div
            class="col-md-4 text-white text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            <div class="icon">
              <i class="fas fa-gem"></i>
            </div>
            <h5 class="title-service">UI/UX Web Designer</h5>
            <p class="text-service mx-4">
              Pada bagian ini UI/UX designer merupakan orang yang menangani
              tampilan dari suatu produk, seperti aplikasi atau website.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-project">
      <div class="text-center mb-3 pt-4">
        <p class="text-pink sub-title-project">My Project</p>
        <h2 class="title-project">Recent Works</h2>
        <!-- <p class="text-project">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> -->
      </div>

      <div class="container mt-5">
        <div class="row my-5" v-for="project in projects" :key="project.id">
          <div class="col-md-5">
            <carousel :items-to-show="1.5">
              <slide v-for="image in project.images" :key="image.id">
                <div class="card mx-3 border-0">
                  <img
                    :src="image.url"
                    class="card-img-top"
                    :alt="image.title"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      {{ image.title }}
                    </p>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
          <div class="col-md-7">
            <h3 class="fw-bolder">{{ project.name }}</h3>
            <hr />
            <div class="">
              <h5 class="fw-bolder">Description:</h5>
              <p>{{ project.description }}</p>
            </div>

            <div class="">
              <h5 class="fw-bolder">Stack:</h5>
              <div
                class="d-inline"
                v-for="stack in project.stacks"
                :key="stack.id"
              >
                <span :class="`badge mx-1 rounded-pill ${stack.color}`">{{
                  stack.name
                }}</span>
              </div>
            </div>
            <div class="mt-2">
              <h5 class="fw-bolder">Demo Project:</h5>
              <a
                :href="project.urlProject"
                class="btn btn-sm btn-bg-biru text-white"
                ><i class="fas fa-eye"></i> Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useProjectStore } from '@/stores/useProject'
  import Header from '@/components/Header.vue'
  import { computed, onMounted } from 'vue'
  import AOS from 'aos'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'

  const projectStore = useProjectStore()
  const projects = computed(() => projectStore.projects)

  onMounted(() => {
    AOS.init()
  })
</script>
