<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for='(link, i) in menus' :key='i'>
            <n-link :to="link.url">
                {{ link.title }}
            </n-link>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' class="title">
                    <n-link :to="link.url"> {{ link.title }} </n-link>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span>
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <n-link :to="link.url"> {{ link.title }} </n-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import mobileMenuResponsive from '../../common/mobileMenuResponsive';
export default {
    data() {
        return {
            menus: [
                {
                    url: '',
                    title: 'Home',
                    submenu: [
                        {
                            url: '/',
                            title: 'EduBlink Education'
                        },
                    ]
                },
                {
                    url: '',
                    title: 'Pages',
                    submenu: [
                        {
                            url: '',
                            title: 'Inner Pages',
                            submenu: [
                                {
                                    url: '/about-us-two',
                                    title: 'About Us 2'
                                },
                                {
                                    url: '/about-us-three',
                                    title: 'About Us 3'
                                },
                                {
                                    url: '/instructor/instructor-one',
                                    title: 'Instructor 1'
                                },
                                {
                                    url: '/instructor/instructor-two',
                                    title: 'Instructor 2'
                                },
                                {
                                    url: '/instructor/instructor-three',
                                    title: 'Instructor 3'
                                },
                                {
                                    url: '/instructor/instructor-profile',
                                    title: 'Instructor Profile'
                                },
                                {
                                    url: '/faq',
                                    title: 'Faq\'s'
                                },
                                {
                                    url: '/coming-soon',
                                    title: 'Coming Soon'
                                }
                            ]
                        },
                        {
                            url: '',
                            title: 'Inner Pages',
                            submenu: [
                                {
                                    url: '/gallery-grid',
                                    title: 'Gallery Grid'
                                },
                                {
                                    url: '/gallery-masonry',
                                    title: 'Gallery Masonry'
                                },
                                {
                                    url: '/event/event-grid',
                                    title: 'Event Grid'
                                },
                                {
                                    url: '/event/event-list',
                                    title: 'Event List'
                                },
                                {
                                    url: '/event/event-details',
                                    title: 'Event Details'
                                },
                                {
                                    url: '/pricing-table',
                                    title: 'Pricing Table'
                                },
                                {
                                    url: '/purchase-guide',
                                    title: 'Purchase Guide'
                                },
                                {
                                    url: '/privacy-policy',
                                    title: 'Privacy Policy'
                                },
                                {
                                    url: '/terms-condition',
                                    title: 'Terms & Condition'
                                },
                                {
                                    url: '/my-account',
                                    title: 'Sign In'
                                }
                            ]
                        },
                        {
                            url: '',
                            title: 'Shop Pages',
                            submenu: [
                                {
                                    url: '/shop',
                                    title: 'Shop'
                                },
                                {
                                    url: '/shop/product-details',
                                    title: 'Product Details'
                                },
                                {
                                    url: '/shop/cart',
                                    title: 'Cart'
                                },
                                {
                                    url: '/shop/wishlist',
                                    title: 'Wishlist'
                                },
                                {
                                    url: '/shop/checkout',
                                    title: 'Checkout'
                                }
                            ]
                        }
                    ]
                },
                {
                    url: '',
                    title: 'Courses',
                    submenu: [
                        {
                            url: '/course/course-one',
                            title: 'Course Style 1'
                        },
                        {
                            url: '/course/course-two',
                            title: 'Course Style 2'
                        },
                        {
                            url: '/course/course-three',
                            title: 'Course Style 3'
                        },
                        {
                            url: '/course/course-four',
                            title: 'Course Style 4'
                        },
                        {
                            url: '/course/course-five',
                            title: 'Course Style 5'
                        },
                        {
                            url: '/course/course-details',
                            title: 'Course Details 1'
                        },
                        {
                            url: '/course/course-details-2',
                            title: 'Course Details 2'
                        },
                        {
                            url: '/course/course-details-3',
                            title: 'Course Details 3'
                        }
                    ]
                },
                {
                    url: '',
                    title: 'Blog',
                    submenu: [
                        {
                            url: '/blog/Contents',
                            title: 'Contents'
                        },
                        {
                            url: '/blog/blog-masonry',
                            title: 'Blog Masonry'
                        },
                        {
                            url: '/blog/blog-list',
                            title: 'Blog List'
                        },
                        {
                            url: '/blog/spark',
                            title: 'spark'
                        },
                        {
                            url: '/blog/cache-management-distribution',
                            title: 'cache-management-distribution'
                        },
                        {
                            url: '/blog/Vizulisation-tools',
                            title: 'Vizulisation-tools'
                        },
                        {
                            url: '/blog/Cloud-Architect',
                            title: 'Cloud-Architect'
                        },
                        {
                            url: '/blog/Hadoop-Ecosystem',
                            title: 'Hadoop-Ecosystem'
                        },
                        {
                            url: '/blog/agile-scrum',
                            title: 'agile-scrum'
                        },
                        {
                            url: '/blog/smart-city-salesforce',
                            title: 'smart-city-salesforce'
                        },
                        {
                            url: '/blog/AWS-re-invent',
                            title: 'AWS-re-invent'
                        },
                        {
                            url: '/blog/data-modeling',
                            title: 'data-modeling'
                        },
                        {
                            url: '/blog/Event-Streaming',
                            title: 'Event-Streaming'
                        },
                        {
                            url: '/blog/Blockchain-world',
                            title: 'Blockchain-world'
                        }
                    ]
                },
                {
                    url: '',
                    title: 'Contact',
                    submenu: [
                        {
                            url: '/contact-me',
                            title: 'Contact Me'
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        mobileMenuResponsive();
    }
}
</script>