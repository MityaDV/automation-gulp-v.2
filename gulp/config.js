module.exports = {
  dist: 'build',
  src: 'src',
  fonts: 'src/fonts/**/*.{woff,woff2}',
  libs: 'src/libs/**/*.{js,css}',
  html: {
    src: 'src/*.html',
  },
  pug: {
    src: 'src/pages/*.pug',
    watch: 'src/pages/**/*.pug'
  },
  css: {
    src: 'src/sass/style.scss',
    watch: 'src/sass/**/*.scss',
    dist: 'build/css',
    min: 'style.min.css'
  },
  js: {
    src: 'src/js/main.js',
    srcLibs: 'src/libs/**/*.js',
    watch: 'src/js/**/*.js',
    mode: 'iife',
    dist: 'build/js/',
    distLibs: 'build/js/'
  },
  sprite: {
    src: 'src/img/icons-sprite/*.svg',
    dist: 'build/img/sprite',
    name: 'sprite.svg'
  },
  svg: {
    src: 'src/img/icons/*.svg',
    dist: 'build/img'
  },
  img: {
    src: 'src/img/**/*.{png,jpg,svg}',
    srcRasterImg: 'src/img/**/*.{png,jpg}',
    dist: 'build/img'
  },
  video: {
    src: 'src/video/**/*.{mp4,webm}',
    dist: 'build/video'
  },
  data: {
    src: 'src/json/data.json',
    watch: 'src/json/*.json',
    dist: 'build/json'
  },
  lighthouse: {
    buildPath: 'build',
    reportPath: 'reports',
    PORT: 8080,
    chromeLauncherPort: 9222,
    config: {
      extends: 'lighthouse:default'
    },
    flags: {
      // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
      chromeFlags: ['--show-paint-rects'],
      output: 'html'
    }
  },
  copyDependencies: {
    dist: 'src/local_modules',
    srcCopyModules: 'node_modules'
  },
  smartGrid: {
    dist: 'src/sass/libs/',
    outputStyle: 'scss',
    filename: 'smart-grid',
    columns: 12,
    offset: '1.875rem',
    mobileFirst: false,
    mixinNames: {
      container:'container',
    },
    container: {
      fields: '0.9375rem'
    },
    breakPoints: {
      xs: {
        width: '320px',
        // fields: ''
      },
      sm: {
        width: '576px',
        // fields: ''
      },
      md: {
        width: '768px',
        // fields: ''
      },
      lg: {
        width: '992px',
        // fields: ''
      },
      xl: {
        width: '1200px',
        // fields: ''
      }
    }
  }
};
