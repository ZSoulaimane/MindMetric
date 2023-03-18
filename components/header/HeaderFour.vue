<template>
    <header class="edu-header header-style-4 header-fullwidth no-topbar">
        <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
            <div class="container-fluid">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo"
                                    v-if="$colorMode.value === 'dark'">
                                <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo"
                                    v-if="$colorMode.value === 'dark'">
                            </n-link>
                        </div>
                    </div>

                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <SearchPopUp />

        <OffCanvasMobileMenuOne />
    </header>
</template>

<script>
export default {
    components: {
        Navigation: () => import("@/components/header/Navigation"),
        SearchPopUp: () => import("@/components/header/SearchPopUp"),
        ColorMode: () => import("@/components/common/ColorMode"),
        OffCanvasMobileMenuOne: () => import("@/components/header/OffCanvasMobileMenuOne")
    },
    data() {
        return {
            isSticky: false
        }
    },
    props: ['showHeaderTop'],
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 200) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        })
    },
    methods: {
        // Off-canvas Mobile Menu Open
        mobileMenuOpen(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },

        // search popup
        searchPopUpOpen(addRemoveClass, className) {
            const el = document.querySelector('#edu-search-popup');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        }
    }
}
</script>