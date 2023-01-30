import { acceptHMRUpdate, defineStore } from "pinia";
import TheBrightImage from '../assets/image/The-Bright-Landing-Page.png';
import TheBrightImage1 from '../assets/image/The-Bright-Dashboard-Admin.png';
import RamaWisataImage from '../assets/image/Rama-Wisata-Landing-Page.png';
import RamaWisataImage1 from '../assets/image/Rama-Wisata-Detail.png';
import LaravelLogo from '../assets/image/laravel-icon.png'
import Kasirku1 from '../assets/image/kasirku-1.png'
import Kasirku2 from '../assets/image/kasirku-2.png'
import MySqlLogo from '../assets/image/mysql.jpg'
import PhpLogo from '../assets/image/php-icon.png'
import BootstrapLogo from '../assets/image/bootstrap-logo.png'
import JqueryLogo from '../assets/image/jquery-logo.png'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Lembaga Bimbingan The Bright Karawang ',
        description:
          'Website yang terdapat fitur Sistem Absensi, Penggajian Karyawan dan halaman landing page',
        images: [{ id: 1, url: TheBrightImage, title: 'Landing Page' }, { id: 2, url: TheBrightImage1, title: 'Dashboard Admin' }],
        stacks: [
          { id: 1, name: 'Laravel', icon: LaravelLogo, color: 'text-bg-danger' },
          { id: 2, name: 'Mysql', icon: MySqlLogo, color: 'text-bg-warning' },
          { id: 3, name: 'Bootstrap', icon: BootstrapLogo, color: 'text-bg-primary' },
          { id: 6, name: 'Figma', icon: PhpLogo, color: 'text-bg-secondary' },
        ],
        urlProject: 'https://thebrightcourse.com',
      },
      {
        id: 2,
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
          { id: 6, name: 'Figma', icon: PhpLogo, color: 'text-bg-secondary' },
        ],
        urlProject: 'https://ramawisata.netlify.app/',
      },
      {
        id: 3,
        name: 'Sistem Informasi Inventory',
        description:
          'Website ini terdapat fitur kelola produk, transaksi, laporan transaksi barang masuk dan keluar, print faktur.',
        images: [
          { id: 1, url: Kasirku1, title: 'Dashboard' },
          { id: 2, url: Kasirku2, title: 'Tansaksi penjualan' },
        ],
        stacks: [
          { id: 1, name: 'Php', icon: PhpLogo, color: 'text-bg-secondary' },
          { id: 2, name: 'Mysql', icon: MySqlLogo, color: 'text-bg-warning' },
          { id: 3, name: 'Bootstrap', icon: BootstrapLogo, color: 'text-bg-primary' },
        ],
        urlProject: '#',
      },

    ],
  }),
  getters: {},
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
}