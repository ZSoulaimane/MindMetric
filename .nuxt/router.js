import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _797806ec = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _46defdd0 = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _eb3cba8a = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _2a5d4da7 = () => interopDefault(import('../pages/blog/agile-scrum.vue' /* webpackChunkName: "pages/blog/agile-scrum" */))
const _36c20102 = () => interopDefault(import('../pages/blog/AWS-re-invent.vue' /* webpackChunkName: "pages/blog/AWS-re-invent" */))
const _2c8e082b = () => interopDefault(import('../pages/blog/Blockchain-world.vue' /* webpackChunkName: "pages/blog/Blockchain-world" */))
const _bab537b2 = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _6ad1b4cc = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _4dea86c1 = () => interopDefault(import('../pages/blog/cache-management-distribution.vue' /* webpackChunkName: "pages/blog/cache-management-distribution" */))
const _615c53db = () => interopDefault(import('../pages/blog/Cloud-Architect.vue' /* webpackChunkName: "pages/blog/Cloud-Architect" */))
const _1a2e31ec = () => interopDefault(import('../pages/blog/Contents.vue' /* webpackChunkName: "pages/blog/Contents" */))
const _b915eacc = () => interopDefault(import('../pages/blog/data-modeling.vue' /* webpackChunkName: "pages/blog/data-modeling" */))
const _13fa116d = () => interopDefault(import('../pages/blog/Event-Streaming.vue' /* webpackChunkName: "pages/blog/Event-Streaming" */))
const _64e8eb0a = () => interopDefault(import('../pages/blog/Hadoop-Ecosystem.vue' /* webpackChunkName: "pages/blog/Hadoop-Ecosystem" */))
const _41484f8a = () => interopDefault(import('../pages/blog/smart-city-salesforce.vue' /* webpackChunkName: "pages/blog/smart-city-salesforce" */))
const _70d0afca = () => interopDefault(import('../pages/blog/spark.vue' /* webpackChunkName: "pages/blog/spark" */))
const _41f3f32d = () => interopDefault(import('../pages/blog/Vizulisation-tools.vue' /* webpackChunkName: "pages/blog/Vizulisation-tools" */))
const _6b9c4b2e = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _00dc5564 = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _00c02662 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _21d7fc1b = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _5e3fb88f = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _fcd0f7e6 = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _075c50f6 = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _cc01961a = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _36468aff = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _60bda44e = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _0ce0e731 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _29e63337 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/coming-soon",
    component: _797806ec,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _46defdd0,
    name: "contact-me"
  }, {
    path: "/faq",
    component: _eb3cba8a,
    name: "faq"
  }, {
    path: "/blog/agile-scrum",
    component: _2a5d4da7,
    name: "blog-agile-scrum"
  }, {
    path: "/blog/AWS-re-invent",
    component: _36c20102,
    name: "blog-AWS-re-invent"
  }, {
    path: "/blog/Blockchain-world",
    component: _2c8e082b,
    name: "blog-Blockchain-world"
  }, {
    path: "/blog/blog-list",
    component: _bab537b2,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _6ad1b4cc,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/cache-management-distribution",
    component: _4dea86c1,
    name: "blog-cache-management-distribution"
  }, {
    path: "/blog/Cloud-Architect",
    component: _615c53db,
    name: "blog-Cloud-Architect"
  }, {
    path: "/blog/Contents",
    component: _1a2e31ec,
    name: "blog-Contents"
  }, {
    path: "/blog/data-modeling",
    component: _b915eacc,
    name: "blog-data-modeling"
  }, {
    path: "/blog/Event-Streaming",
    component: _13fa116d,
    name: "blog-Event-Streaming"
  }, {
    path: "/blog/Hadoop-Ecosystem",
    component: _64e8eb0a,
    name: "blog-Hadoop-Ecosystem"
  }, {
    path: "/blog/smart-city-salesforce",
    component: _41484f8a,
    name: "blog-smart-city-salesforce"
  }, {
    path: "/blog/spark",
    component: _70d0afca,
    name: "blog-spark"
  }, {
    path: "/blog/Vizulisation-tools",
    component: _41f3f32d,
    name: "blog-Vizulisation-tools"
  }, {
    path: "/course/course-details",
    component: _6b9c4b2e,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _00dc5564,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _00c02662,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _21d7fc1b,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _5e3fb88f,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _fcd0f7e6,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _075c50f6,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _cc01961a,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _36468aff,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _60bda44e,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _0ce0e731,
    name: "event-event-list"
  }, {
    path: "/",
    component: _29e63337,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
