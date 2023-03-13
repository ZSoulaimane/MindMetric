<template>
    <section class="why-choose-area-3 edu-section-gap">
        <div class="container">
            <div class="row row--45">
                <div class="section-title-flex section-title" data-aos-delay="150" data-aos="fade-up"
                    data-aos-duration="800">
                    <div class="left-content">
                        <h2 class="title">Our Area Of <span class="color-secondary">Experties</span></h2>
                        <span class="shape-line"><i class="icon-19"></i></span>
                    </div>
                    <div class="right-content">
                        <p>Transform your digital landscape with our expertise in the trifecta of data engineering, web
                            analytics, and cloud computing - driving limitless innovation, smarter decisions, and unbeatable
                            business outcomes.</p>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-lg-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800"
                    v-for="(feature, index) in features" :key="index">
                    <div class="why-choose-box-2 features-box" :class="feature.colorClass">
                        <div class="icon">
                            <i :class="feature.iconClass"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ feature.title }}</h4>
                            <p>{{ feature.details }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth=".8" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            <li class="shape-3">
                <img class="rellax" data-rellax-speed="-1.3" data-rellax-xs-speed="-1.3" data-rellax-mobile-speed="-0.5"
                    data-rellax-tablet-speed="-0.5" src="/images/faq/shape-12.png" alt="shape" />
            </li>
        </ul>
        <br><br><br><br><br>
    </section>
</template>

<script>
import parallaxAnimation from '../../common/parallaxAnimation';
export default {
    components: {
        MouseMove: () => import('@/components/animation/MouseMove')
    },
    mounted() {
        parallaxAnimation();
    },
    data() {
        return {
            features: [
                {
                    title: "Data Engineering",
                    details: "Data engineering is the backbone of modern technology, powering everything from AI to business insights.",
                    iconClass: "icon-9",
                    colorClass: "color-primary-style"
                },
                {
                    title: "Web Analytics",
                    details: "Web analytics unlocks the secrets of online behavior, driving smarter decisions and better business outcomes.",
                    iconClass: "icon-45",
                    colorClass: "color-secondary-style"
                },
                {
                    title: "Cloud Computing",
                    details: "Unleash limitless innovation with cloud architecture and computing - the foundation of modern digital transformation.",
                    iconClass: "icon-11",
                    colorClass: "color-extra08-style"
                }
            ]
        }
    }
}
</script>