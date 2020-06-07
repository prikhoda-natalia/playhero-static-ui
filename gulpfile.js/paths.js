const slash = require("slash");

// Folder Variables
const processCwd = process.cwd();
const cwd = slash(processCwd);

const paths = {
  assets: {
    srcFiles: `${cwd}/src/assets/**/*.{svg,jpg}`,
    distFolder: `${cwd}/dist/assets`,
  },
  distFolder: `${cwd}/dist`,
  layouts: {
    srcFiles: `${cwd}/src/*.html`
  },
  srcFolder: `${cwd}/src`,
  styles: {
    srcFiles: `${cwd}/src/styles/*.scss`,
    srcMainFile: `${cwd}/src/styles/index.scss`,
    relativeSrcFolder: `src/styles`
  }
};

module.exports = paths;
