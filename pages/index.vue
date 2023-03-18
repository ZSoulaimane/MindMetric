<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <Banner />

        <Categories />

        <About />

        <Course />

        <VideoSection />

        <TestimonialTwo />

        <Logo />

        <FAQ />

        <Blog />

        <FooterOne />
    </div>
</template>

<script>
export default {
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        Banner: () => import("@/components/home-distant-learning/Banner"),
        Categories: () => import("@/components/home-distant-learning/Categories"),
        About: () => import("@/components/home-distant-learning/About"),
        Course: () => import("@/components/home-distant-learning/Course"),
        VideoSection: () => import("@/components/home-distant-learning/Video"),
        TestimonialTwo: () => import("@/components/testimonial/TestimonialTwo"),
        Logo: () => import("@/components/home-distant-learning/Logo"),
        FAQ: () => import("@/components/home-distant-learning/FAQ"),
        Blog: () => import("@/components/home-distant-learning/Blog"),
        FooterOne: () => import("@/components/footer/FooterOne")
    },
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>