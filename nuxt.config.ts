// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    secret: {
      spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      spotifyRefreshToken: process.env.SPOTIFY_RT,
    },
    // public: {
    //   spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
    //   spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    //   spotifyRefreshToken: process.env.SPOTIFY_RT,
    // },
  },
  modules: [
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
  ],
  plugins: [
    { src: "~/plugins/kinesis", mode: "client" },
    "~/plugins/hygraph.js",
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            metalic: {
              DEFAULT: "#A5A6AD",
              "900": "#95959b",
            },
            brightgreen: {
              DEFAULT: "#6BF738",
            },
            customblack: {
              DEFAULT: "#0B090A",
              "100": "#161A1D",
              "200": "#232424",
            },
          },
        },
        fontFamily: {
          body: ["Inter", "sans-serif"],
        },
      },
    },
  },
  // buildModules: ["@nuxtjs/google-fonts"],
  // googleFonts: {
  //   useStylesheet: true,
  //   download: true,
  //   overwriting: true,
  //   stylePath: "css/fonts.css",
  //   families: {
  //     "David Libre": true,
  //   },
  // },
});
