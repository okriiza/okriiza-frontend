<script setup>
  import IconNav from './icons/IconNav.vue'
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
  >
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="#">
        <img
          src="../assets/image/logo2.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="Icon"
          loading="lazy"
        />
      </a>
      <IconNav />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portofolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
