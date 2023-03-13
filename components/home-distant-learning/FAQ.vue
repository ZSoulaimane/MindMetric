<template>
    <div class="edu-faq-area faq-style-1 about-style-3">
        <div class=" container">
            <div class="row g-5 row--45">
                <div class="col-lg-6">
                    <div class="about-image-gallery">
                        <img class="main-img-1" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                            src="/images/about/about-04.jpg" style="filter: saturate(0.5);" alt="About Image">
                        <img class="main-img-2" data-aos-delay="100" data-aos="fade-right" data-aos-duration="800"
                            src="/images/about/about-05.jpg" style="filter: saturate(0.5);" alt="About Image">
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="500" data-aos="fade"
                                data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="500" data-aos="fade"
                                data-aos-duration="200" imgSrc="/images/about/shape-39.png" />
                            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="500" data-aos="fade"
                                data-aos-duration="200" imgSrc="/images/about/shape-07.png" />
                            <li class="shape-4" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="edu-faq-content">

                        <SectionTitle title='Our Mean <span class="color-secondary">Purpose</span>' />

                        <AccordionOne />

                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="1.5" imgSrc="/images/about/shape-02.png"
                                data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                            <MouseMove addClassName="shape-2" dataDepth="-2.2" data-aos-delay="500" data-aos="fade"
                                data-aos-duration="200" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle'),
        AccordionOne: () => import('@/components/AccordionOne'),
        MouseMove: () => import('@/components/animation/MouseMove')
    }
}
</script>
