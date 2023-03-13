<template>
    <div class="gap-bottom-equal edu-about-area about-style-2">
        <div class="container edublink-animated-shape">
            <div class="row g-5 align-items-center">
                <div class="col-lg-7">
                    <div class="about-image-gallery">
                        <img class="main-img-1" style="filter: saturate(0.5);" src="/images/about/about-03.jpg"
                            alt="About Image">
                        <div class="author-box rellax" data-rellax-speed="0.8" data-rellax-xs-speed="0.8"
                            data-rellax-mobile-speed="0.5" data-rellax-tablet-speed="0.5">
                            <div class="inner">
                                <div class="content">
                                    <h4 class="title">Cloud & Data Analytics</h4>
                                    <p>Revolutionize problem-solving for positive change.</p>
                                </div>
                            </div>
                        </div>
                        <div class="award-status bounce-slide">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icon-15"></i>
                                </div>
                                <div class="content">
                                    <h6 class="title">Learn</h6>
                                    <span class="subtitle">Share knowledge</span>
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-38.png"
                                data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-37.png"
                                data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-3" dataDepth="1.8" imgSrc="/images/about/shape-04.png"
                                data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about-content">
                        <SectionTitle preTitle='About Us'
                            title='Diverse <span class="color-secondary">Skills</span></BR> Distinct <span class="color-secondary">Areas</span></BR> Varied <span class="color-secondary">Projects</span>' />

                        <ul class="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <li>Cutting-edge tech</li>
                            <li>Problem solving</li>
                            <li>Innovate, stay informed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1 circle" dataDepth="-2.3" data-aos-delay="500" data-aos="fade"
                    data-aos-duration="200" />
            </ul>
        </div>
    </div>
</template>

<script>
import parallaxAnimation from '../../common/parallaxAnimation';
export default {
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle'),
        MouseMove: () => import('@/components/animation/MouseMove')
    },
    mounted() {
        parallaxAnimation();
    }
}
</script>