/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */

const env = process.env.NODE_ENV === 'production'

// eslint-disable-next-line import/newline-after-import
;(async () => {
  const imagemin = (await import('imagemin')).default
  const imageminWebp = (await import('imagemin-webp')).default

  const files = await imagemin(['build/img/*.{jpg,jpeg,png}'], {
    destination: env ? 'public/img' : 'build/img',
    plugins: [imageminWebp({ quality: 75 })]
  })

  files.forEach(file => console.log('Converted WEBP:', file.destinationPath))

  const terminalNorteImages = await imagemin(
    ['build/img/terminal-norte/*.{jpg,jpeg,png}'],
    {
      destination: env
        ? 'public/img/terminal-norte'
        : 'build/img/terminal-norte',
      plugins: [imageminWebp({ quality: 75 })]
    }
  )

  terminalNorteImages.forEach(image =>
    console.log('Converted WEBP:', image.destinationPath)
  )

  const terminalSurImages = await imagemin(
    ['build/img/terminal-sur/*.{jpg,jpeg,png}'],
    {
      destination: env ? 'public/img/terminal-sur' : 'build/img/terminal-sur',
      plugins: [imageminWebp({ quality: 75 })]
    }
  )

  terminalSurImages.forEach(image =>
    console.log('Converted WEBP:', image.destinationPath)
  )
})()