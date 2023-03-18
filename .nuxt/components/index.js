export { default as AccordionOne } from '../../components/AccordionOne.vue'
export { default as FunFact } from '../../components/FunFact.vue'
export { default as InstagramPost } from '../../components/InstagramPost.vue'
export { default as AnimationMouseMove } from '../../components/animation/MouseMove.vue'
export { default as BlogPostList } from '../../components/blog/BlogPostList.vue'
export { default as BlogPostOne } from '../../components/blog/BlogPostOne.vue'
export { default as BlogPostStandard } from '../../components/blog/BlogPostStandard.vue'
export { default as BlogPostTwo } from '../../components/blog/BlogPostTwo.vue'
export { default as CommonBreadCrumbOne } from '../../components/common/BreadCrumbOne.vue'
export { default as CommonBreadCrumbThree } from '../../components/common/BreadCrumbThree.vue'
export { default as CommonBreadCrumbTwo } from '../../components/common/BreadCrumbTwo.vue'
export { default as CommonColorMode } from '../../components/common/ColorMode.vue'
export { default as CommonPaginationOne } from '../../components/common/PaginationOne.vue'
export { default as CommonSectionTitle } from '../../components/common/SectionTitle.vue'
export { default as CourseTypeEight } from '../../components/course/CourseTypeEight.vue'
export { default as CourseTypeFive } from '../../components/course/CourseTypeFive.vue'
export { default as CourseTypeFour } from '../../components/course/CourseTypeFour.vue'
export { default as CourseTypeOne } from '../../components/course/CourseTypeOne.vue'
export { default as CourseTypeSeven } from '../../components/course/CourseTypeSeven.vue'
export { default as CourseTypeSix } from '../../components/course/CourseTypeSix.vue'
export { default as CourseTypeThree } from '../../components/course/CourseTypeThree.vue'
export { default as CourseTypeTwo } from '../../components/course/CourseTypeTwo.vue'
export { default as CtaCTAOne } from '../../components/cta/CTAOne.vue'
export { default as CtaCTAOneAlter } from '../../components/cta/CTAOneAlter.vue'
export { default as EventList } from '../../components/event/EventList.vue'
export { default as EventOne } from '../../components/event/EventOne.vue'
export { default as EventSectionOne } from '../../components/event/EventSectionOne.vue'
export { default as EventTwo } from '../../components/event/EventTwo.vue'
export { default as FooterOne } from '../../components/footer/FooterOne.vue'
export { default as FooterGoogleMapWithAPI } from '../../components/footer/GoogleMapWithAPI.vue'
export { default as FooterScrollToTop } from '../../components/footer/ScrollToTop.vue'
export { default as HeaderCategory } from '../../components/header/Category.vue'
export { default as HeaderOne } from '../../components/header/HeaderOne.vue'
export { default as HeaderMobileMenu } from '../../components/header/MobileMenu.vue'
export { default as HeaderNavigation } from '../../components/header/Navigation.vue'
export { default as HomeDistantLearningAbout } from '../../components/home-distant-learning/About.vue'
export { default as HomeDistantLearningBanner } from '../../components/home-distant-learning/Banner.vue'
export { default as HomeDistantLearningBlog } from '../../components/home-distant-learning/Blog.vue'
export { default as HomeDistantLearningCategories } from '../../components/home-distant-learning/Categories.vue'
export { default as HomeDistantLearningCourse } from '../../components/home-distant-learning/Course.vue'
export { default as HomeDistantLearningFAQ } from '../../components/home-distant-learning/FAQ.vue'
export { default as HomeDistantLearningLogo } from '../../components/home-distant-learning/Logo.vue'
export { default as HomeDistantLearningVideo } from '../../components/home-distant-learning/Video.vue'
export { default as LogoOne } from '../../components/logo/LogoOne.vue'
export { default as LogoTwo } from '../../components/logo/LogoTwo.vue'
export { default as ProductOne } from '../../components/product/ProductOne.vue'
export { default as SidebarBlogSidebarOne } from '../../components/sidebar/BlogSidebarOne.vue'
export { default as SidebarCourseSidebarOne } from '../../components/sidebar/CourseSidebarOne.vue'
export { default as SidebarEventSidebar } from '../../components/sidebar/EventSidebar.vue'
export { default as SidebarPageSidebarOne } from '../../components/sidebar/PageSidebarOne.vue'
export { default as TestimonialTwo } from '../../components/testimonial/TestimonialTwo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
