// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/viktor/Work/homepage/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/viktor/Work/homepage/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/about.js")),
  "component---src-pages-about-images-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/About/Images.jsx")),
  "component---src-pages-about-member-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/About/Member.jsx")),
  "component---src-pages-about-members-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/About/Members.jsx")),
  "component---src-pages-careers-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/careers.js")),
  "component---src-pages-homepage-benefits-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/Homepage/Benefits.jsx")),
  "component---src-pages-homepage-customize-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/Homepage/Customize.jsx")),
  "component---src-pages-homepage-homepage-cta-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/Homepage/HomepageCTA.js")),
  "component---src-pages-homepage-spotlight-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/Homepage/Spotlight.jsx")),
  "component---src-pages-index-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/index.js")),
  "component---src-pages-pricing-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/pricing.js")),
  "component---src-pages-pricing-pricing-benefits-jsx": preferDefault(require("/home/viktor/Work/homepage/src/pages/Pricing/PricingBenefits.jsx")),
  "component---src-pages-terms-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/terms.js")),
  "component---src-pages-privacy-js": preferDefault(require("/home/viktor/Work/homepage/src/pages/privacy.js"))
}

exports.json = {
  "layout-index.json": require("/home/viktor/Work/homepage/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/viktor/Work/homepage/.cache/json/dev-404-page.json"),
  "404.json": require("/home/viktor/Work/homepage/.cache/json/404.json"),
  "about.json": require("/home/viktor/Work/homepage/.cache/json/about.json"),
  "about-images.json": require("/home/viktor/Work/homepage/.cache/json/about-images.json"),
  "about-member.json": require("/home/viktor/Work/homepage/.cache/json/about-member.json"),
  "about-members.json": require("/home/viktor/Work/homepage/.cache/json/about-members.json"),
  "careers.json": require("/home/viktor/Work/homepage/.cache/json/careers.json"),
  "homepage-benefits.json": require("/home/viktor/Work/homepage/.cache/json/homepage-benefits.json"),
  "homepage-customize.json": require("/home/viktor/Work/homepage/.cache/json/homepage-customize.json"),
  "homepage-homepage-cta.json": require("/home/viktor/Work/homepage/.cache/json/homepage-homepage-cta.json"),
  "homepage-spotlight.json": require("/home/viktor/Work/homepage/.cache/json/homepage-spotlight.json"),
  "index.json": require("/home/viktor/Work/homepage/.cache/json/index.json"),
  "pricing.json": require("/home/viktor/Work/homepage/.cache/json/pricing.json"),
  "pricing-pricing-benefits.json": require("/home/viktor/Work/homepage/.cache/json/pricing-pricing-benefits.json"),
  "404-html.json": require("/home/viktor/Work/homepage/.cache/json/404-html.json"),
  "terms.json": require("/home/viktor/Work/homepage/.cache/json/terms.json"),
  "privacy.json": require("/home/viktor/Work/homepage/.cache/json/privacy.json")
}