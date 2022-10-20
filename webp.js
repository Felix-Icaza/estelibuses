;(async () => {
  const imagemin = (await import('imagemin')).default
  const imageminWebp = (await import('imagemin-webp')).default

  async function minify(entry, dest) {
    ;(
      await imagemin([entry], {
        destination: dest,
        plugins: [imageminWebp({ quality: 75 })]
      })
    ).forEach((file) => console.log('Converted WEBP:', file.destinationPath))
  }

  minify('dist/img/terminal-sur/*.{jpg,jpeg}', 'dist/img/terminal-sur')
  minify('dist/img/terminal-norte/*.{jpg,jpeg}', 'dist/img/terminal-norte')
  minify('dist/img/leon/*.{jpg,jpeg}', 'dist/img/leon')
  minify('dist/img/ocotal/*.{jpg,jpeg}', 'dist/img/ocotal')
  minify(
    'dist/img/san-juan-de-limay/*.{jpg,jpeg}',
    'dist/img/san-juan-de-limay'
  )
  minify('dist/img/*.{png,jpg,jpeg}', 'dist/img')
})()
