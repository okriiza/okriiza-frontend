<template>
  <component :is="Header" />
  <!-- <div class="fixed-bottom d-flex justify-content-between container-fluid mb-3">
    <div class="text-center">
      <p>Icon</p>
      <div class="vr text-biru" style="height: 150px"></div>
    </div>
    <div class="text-center">
      <p>Email</p>
      <div class="vr text-biru" style="height: 150px"></div>
    </div>
  </div> -->
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
            data-aos-duration="600"
          >
            <img src="@/assets/image/about.png" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <p class="text-justify text-about" data-aos="fade-up">
              Hai! Saya Rendi Okriza Putra, Saya senang mempelajari hal hal
              baru. Ke tertarikan saya di web development bermula pada tahun
              2012 ketika saya mencoba custom tema blogger, custom tema blogger
              mengajari saya banyak hal tentang HTML, CSS & JavaScript!
              <!--               
              Website ini di
              buat untuk menampilkan hasil dari project yang pernah saya
              kerjakan dan terdapat blog yang berisikan artikel, yang mana di
              artikel tersebut saya akan sharing mengenai hal apa yang saya suka
              dan saya pelajari. -->
            </p>
            <p class="text-justify text-about" data-aos="fade-up">
              Saya mulai fokus belajar mengenai web development pada saat
              perkuliahan, hingga saya dapat membuat website sendiri dan
              mendapatkan beberapa project pembuatan website.
            </p>
            <p class="text-justify text-about" data-aos="fade-up">
              Berikut ini beberapa teknologi yang saya gunakan dalam
              mengembangan website:
            </p>
            <div
              class="row text-about"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div class="col-md-6">
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconLaravel />
                  Laravel
                </p>
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconVuejs />
                  VueJS
                </p>
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconRestApi />
                  Rest API
                </p>
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconMysql />
                  MySql
                </p>
              </div>
              <div class="col-md-6">
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconJavascript />
                  JavaScript
                </p>
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconBootstrap />
                  Bootstrap
                </p>
                <p class="fw-bold">
                  <i class="fas fa-long-arrow-alt-right text-biru me-1"></i>
                  <IconTailwindcss />
                  TailwindCSS
                </p>
              </div>
            </div>
            <h4
              class="mt-4 font-weight-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              My Interests
            </h4>
            <div
              class="list-interests"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span class="fw-bold me-2"
                ><i class="fas fa-headphones-alt text-biru"></i> Music</span
              >
              <span class="fw-bold me-2"
                ><i class="fas fa-suitcase text-biru"></i> Travel</span
              >
              <span class="fw-bold me-2"
                ><i class="fas fa-film text-biru"></i> Movie</span
              >
              <span class="fw-bold me-2"
                ><i class="fas fa-camera-retro text-biru"></i> Photo</span
              >
              <span class="fw-bold me-2"
                ><i class="fas fa-hiking text-biru"></i> Hiking</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-project mt-5">
      <div class="text-center mb-3 pt-4">
        <p class="text-pink sub-title-project">My Project</p>
        <h2 class="title-project">Recent Works</h2>
        <!-- <p class="text-project">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> -->
      </div>

      <div class="container mt-5">
        <div
          class="row my-5"
          v-for="project in projects"
          :key="project.id"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >
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
          <div
            class="col-md-7"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
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

      <div class="text-center mb-3 pt-4">
        <p class="text-pink sub-title-project">My Project</p>
        <h2 class="title-project">Github Repo</h2>
      </div>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4 me-3 mb-3">
            <a
              href="https://github.com/okriiza/vue-3-composition-api-pinia-with-auth-image-example"
              ><img
                src="https://gh-card.dev/repos/okriiza/vue-3-composition-api-pinia-with-auth-image-example.svg?fullname="
                width="100%"
            /></a>
          </div>
          <div class="col-lg-4 me-3 mb-3">
            <a
              href="https://github.com/okriiza/laravel-9-crud-api-with-auth-image"
              ><img
                src="https://gh-card.dev/repos/okriiza/laravel-9-crud-api-with-auth-image.svg?fullname="
                width="100%"
            /></a>
          </div>
          <div class="col-lg-4 me-3 mb-3">
            <a href="https://github.com/okriiza/Vue-3-Code-Snippets"
              ><img
                src="https://gh-card.dev/repos/okriiza/Vue-3-Code-Snippets.svg?fullname="
                width="100%"
            /></a>
          </div>
          <div class="col-lg-4 me-3 mb-3">
            <a href="https://github.com/okriiza/Rens-Theme"
              ><img
                src="https://gh-card.dev/repos/okriiza/Rens-Theme.svg?fullname="
                width="100%"
            /></a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-blog">
      <div class="text-center mb-5 pt-4">
        <p class="text-biru sub-title-blog">Blog</p>
        <h2 class="title-blog">Last Update</h2>
        <!-- <p class="text-blog">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> -->
      </div>
      <div class="container">
        <h4 class="text-biru fw-bolder">Coming Soon !</h4>
        <!-- <div class="row mt-5 mb-5" data-aos="fade-up" data-aos-duration="3000">
          <div class="col-md-4 mb-3">
            <div class="card bg-dark text-white">
              <img
                src="assets/image/constant-loubier-7lzIyp2Ork4-unsplash.jpg"
                class="section-blog-img"
              />
              <div
                class="card-img-overlay d-flex align-items-start flex-column bd-highlight mb-3"
              >
                <h5
                  class="mb-auto card-title btn btn-sm bg-kuning rounded-pill"
                >
                  14 SEP 2020
                </h5>
                <p class="card-text btn bg-biru">Technology</p>
                <p class="card-text btn bg-pink">Tutorial</p>
              </div>
            </div>
            <h4 class="title-artikel">Lorem Ipsum Doalr Sit Amet.</h4>
            <p class="text-artikel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pharetra aliquet sit auctor et lacus sit elementum dignissim.
            </p>
            <button class="btn-bg-biru btn btn-sm text-white">
              READ MORE <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card bg-dark text-white">
              <img
                src="assets/image/juan-gomez-kt-wA0GDFq8-unsplash.jpg"
                class="section-blog-img"
              />
              <div
                class="card-img-overlay d-flex align-items-start flex-column bd-highlight mb-3"
              >
                <h5
                  class="mb-auto card-title btn btn-sm bg-kuning rounded-pill"
                >
                  14 SEP 2020
                </h5>
                <p class="card-text btn bg-biru">Technology</p>
                <p class="card-text btn bg-pink">Tutorial</p>
              </div>
            </div>
            <h4 class="title-artikel">Lorem Ipsum Doalr Sit Amet.</h4>
            <p class="text-artikel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pharetra aliquet sit auctor et lacus sit elementum dignissim.
            </p>
            <button class="btn-bg-biru btn btn-sm text-white">
              READ MORE <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card bg-dark text-white">
              <img
                src="assets/image/constant-loubier-7lzIyp2Ork4-unsplash.jpg"
                class="section-blog-img"
              />
              <div
                class="card-img-overlay d-flex align-items-start flex-column bd-highlight mb-3"
              >
                <h5
                  class="mb-auto card-title btn btn-sm bg-kuning rounded-pill"
                >
                  14 SEP 2020
                </h5>
                <p class="card-text btn bg-biru">Technology</p>
                <p class="card-text btn bg-pink">Tutorial</p>
              </div>
            </div>
            <h4 class="title-artikel">Lorem Ipsum Doalr Sit Amet.</h4>
            <p class="text-artikel">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pharetra aliquet sit auctor et lacus sit elementum dignissim.
            </p>
            <button class="btn-bg-biru btn btn-sm text-white">
              READ MORE <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
  import IconMysql from '@/components/icons/IconMysql.vue'
  import IconLaravel from '@/components/icons/IconLaravel.vue'
  import IconVuejs from '@/components/icons/IconVuejs.vue'
  import IconJavascript from '@/components/icons/IconJavascript.vue'
  import IconTailwindcss from '@/components/icons/IconTailwindcss.vue'
  import IconBootstrap from '@/components/icons/IconBootstrap.vue'
  import IconRestApi from '@/components/icons/IconRestApi.vue'
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

<style>
  .carousel__prev,
  .carousel__next {
    background-color: #5aa9e6;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    border-radius: 100%;
  }
</style>
