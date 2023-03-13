<template>
    <button class="edublink-vue-light-dark-switcher" @click="toggleTheme()">
    </button>
</template>

<script>
export default {
    methods: {
        toggleTheme() {
            this.$colorMode.preference = 'dark';
        }
    }
}
</script>
