const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-notes-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/src/templates/notes.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charleshyland/Dropbox/University-work/5th year/Econ-Workshops/website/econ-workshop/src/pages/index.js")))
}

