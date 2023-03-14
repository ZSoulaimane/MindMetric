<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbOne pageTitle='Blog Details' title='Blog Details' />

        <div class="blog-details-area section-gap-equal">
            <div class="container">
                <div >
                    <div>
                        <div class="blog-details-content">
                            <div class="entry-content">
                                <span class="category">Developer</span>
                                <h3 class="title">How to Become Computer Working Days Software Engineer?</h3>
                                <ul class="blog-meta">
                                    <li><i class="icon-27"></i>Oct 10, 2021</li>
                                    <li><i class="icon-28"></i>Com 09</li>
                                </ul>
                                <div class="thumbnail">
                                    <img src="/images/blog/blog-large-1.jpg" alt="Blog Image">
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. </p>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            <ul>
                                <li>Aute irure dolor in reprehenderit</li>
                                <li>Occaecat cupidatat non proident sunt in culpa</li>
                                <li>Pariatur enim ipsam.</li>
                            </ul>
                            <blockquote>
                                <p>Lorem ipsum dolor amet con sectur elitadicing elit sed do usmod tempor uincididunt enim minim veniam nostrud.</p>
                                <h5 class="author">Simon Baker</h5>
                            </blockquote>
                            <h3 class="title">The Complete Camtasia</h3>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. </p>
                            <div class="features-image">
                                <div class="row g-md-5">
                                    <div class="col-6">
                                        <div class="thumb">
                                            <img src="/images/blog/features-1.jpg" alt="Features Images">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="thumb">
                                            <img src="/images/blog/features-2.jpg" alt="Features Images">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. </p>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            <h3 class="title">Intrinsic Motivation</h3>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. </p>
                            <ul>
                                <li>Aute irure dolor in reprehenderit</li>
                                <li>Occaecat cupidatat non proident sunt in culpa</li>
                                <li>Pariatur enim ipsam.</li>
                            </ul>
                            <div class="blog-share-area">
                                <div class="row align-items-center">
                                    <div class="col-md-7">
                                        <div class="blog-tags">
                                            <h6 class="title">Tags:</h6>
                                            <div class="tag-list">
                                                <a href="#">Language</a>
                                                <a href="#">eLearn</a>
                                                <a href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="blog-share">
                                            <h6 class="title">Share on:</h6>
                                            <ul class="social-share icon-transparent">
                                                <li>
                                                    <a href="#"><i class="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i class="icon-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import blogData from '~/data/blog';
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                blogData,
            }
        },
        head() {
            return {
                title: 'Blog Details'
            }
        }
    }
</script>