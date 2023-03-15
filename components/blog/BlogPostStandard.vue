<template>
    <div class="edu-blog blog-style-4">
        <div class="inner">
            <div class="thumbnail">
                <n-link :to="blogInfo.site">
                    <img :src="'/images/blog/blog-standard/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </n-link>
            </div>
            <div class="content">
                <div class="category-wrap">
                    <n-link :to="blogInfo.site" class="blog-category">{{ blogInfo.category }}</n-link>
                </div>
                <h3 class="title">
                    <n-link :to="blogInfo.site">{{ blogInfo.title }}</n-link>
                </h3>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt3 }}</p>
                <div class="read-more-btn">
                    <n-link :to="blogInfo.site" class="edu-btn btn-border btn-medium">
                        Learn More <i class="icon-4"></i>
                    </n-link>
                </div>
            </div>
        </div>
        <CoolLightBox :items="blogInfo.video !== undefined ? blogInfo.video : []" :index="index" @close="index = null">
        </CoolLightBox>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo'],
        data() {
            return {
                index: null,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    pagination: false,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    navigation: {
                        nextEl: ".swiper-btn-nxt",
                        prevEl: ".swiper-btn-prv"
                    }
                }
            }
        }
    }
</script>

<style>
    .blog-gallery-activation {
        position: relative;
    }
</style>