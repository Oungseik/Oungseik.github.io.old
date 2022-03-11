/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
// const withPWA = require("next-pwa");

// --- default config --- //
const eslint = {
  dirs: ['src'],
};

const reactStrictMode = true;

const webpack = config => {
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          typescript: true,
          icon: true,
        },
      },
    ],
  });

  return config;
}
// --- end of default config --- //

module.exports = withPlugins(
  [eslint],
  [reactStrictMode],
  [webpack],
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "png"],
      optimizeImages: true,
      optimizeImagesInDev: true,
      defaultImageLoader: "responsive-loader",
      responsive: {
        test: /\.(jpe?g|png)$/i,
        adapter: require("responsive-loader/sharp"),
        sizes: [512, 720, 1024, 1280, 1440, 1680, 2560],
      },
    },
  ]
)


/*
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
*/
