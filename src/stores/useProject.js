import { acceptHMRUpdate, defineStore } from "pinia";
import TheBrightImage from '../assets/image/The-Bright-Landing-Page.png';
import TheBrightImage1 from '../assets/image/The-Bright-Dashboard-Admin.png';
import RamaWisataImage from '../assets/image/Rama-Wisata-Landing-Page.png';
import RamaWisataImage1 from '../assets/image/Rama-Wisata-Detail.png';
import LaravelLogo from '../assets/image/laravel-icon.png'
import MySqlLogo from '../assets/image/mysql.jpg'
import PhpLogo from '../assets/image/php-icon.png'
import BootstrapLogo from '../assets/image/bootstrap-logo.png'
import JqueryLogo from '../assets/image/jquery-logo.png'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Sistem Informasi Pariwisata',
        description:
          'Website ini menampilkan informasi paket wisata, Detail Paket Wisata dan Kegiatan wisata.',
        images: [
          { id: 1, url: RamaWisataImage, title: 'Landing Page' },
          { id: 2, url: RamaWisataImage1, title: 'Detail Page' },
        ],
        stacks: [
          { id: 1, name: 'Laravel', icon: LaravelLogo, color: 'text-bg-danger' },
          { id: 2, name: 'Mysql', icon: MySqlLogo, color: 'text-bg-warning' },
          { id: 3, name: 'Bootstrap', icon: BootstrapLogo, color: 'text-bg-primary' },
          { id: 4, name: 'PHP', icon: PhpLogo, color: 'text-bg-secondary' },
          { id: 5, name: 'Jquery', icon: JqueryLogo, color: 'text-bg-light' },
          { id: 6, name: 'Figma', icon: PhpLogo, color: 'text-bg-secondary' },
        ],
        urlProject: 'https://ramawisata.netlify.app/',
      },
      {
        id: 2,
        name: 'Lembaga Bimbingan The Bright Karawang (LMS)',
        description:
          'Website yang terdapat fitur Sistem Absensi, Penggajian Karyawan dan halaman landing page',
        images: [{ id: 1, url: TheBrightImage, title: 'Landing Page' }, { id: 2, url: TheBrightImage1, title: 'Dashboard Admin' }],
        stacks: [
          { id: 1, name: 'Laravel', icon: LaravelLogo, color: 'text-bg-danger' },
          { id: 2, name: 'Mysql', icon: MySqlLogo, color: 'text-bg-warning' },
          { id: 3, name: 'Bootstrap', icon: BootstrapLogo, color: 'text-bg-primary' },
          { id: 4, name: 'PHP', icon: PhpLogo, color: 'text-bg-secondary' },
          { id: 5, name: 'Jquery', icon: JqueryLogo, color: 'text-bg-light' },
          { id: 6, name: 'Figma', icon: PhpLogo, color: 'text-bg-secondary' },
        ],
        urlProject: 'https://thebrightcourse.com',
      },
    ],
  }),
  getters: {},
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
}