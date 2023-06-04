const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfiguration = {
  images: {
    optimizeImagesInDev: true,
    disableStaticImages: true,
  },
}

module.exports = withPlugins([optimizedImages], nextConfiguration)
