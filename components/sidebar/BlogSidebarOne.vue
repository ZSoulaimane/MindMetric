<template>
    <div class="edu-blog-sidebar">
        <div class="edu-blog-widget widget-search">
            <div class="inner">
                <h4 class="widget-title">Search</h4>
                <div class="content">
                    <form class="blog-search" action="#">
                        <button class="search-button"><i class="icon-2"></i></button>
                        <input type="text" placeholder="Search">
                    </form>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-latest-post">
            <div class="inner">
                <h4 class="widget-title">Latest Post</h4>
                <div class="content latest-post-list">
                    <div class="latest-post" v-for="blog in blogItems.slice(0, 3)" :key="blog.id">
                        <div class="thumbnail">
                            <n-link to="/blog/spark">
                                <img :src="'/images/blog/blog-thumb/' + blog.thumbSrc" :alt="blog.alt">
                            </n-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <n-link to="/blog/spark">{{ blog.title }}</n-link>
                            </h6>
                            <ul class="blog-meta">
                                <li><i class="icon-27"></i>{{ blog.date }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-categories">
            <div class="inner">
                <h4 class="widget-title">Categories</h4>
                <div class="content">
                    <ul class="category-list">
                        <li v-for="(cat, index) in categories.slice(0, 6)" :key="index">
                            <n-link to="/blog/blog-masonry">{{ cat.title }} <span>({{ cat.number }})</span>
                            </n-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['blogItems', 'tags', 'categories', 'archives', 'tags']
};
</script>