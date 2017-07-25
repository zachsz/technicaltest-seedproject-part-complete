<template>
    <div class="filter-menu">
        <ProductTypeFilter :filter-model="filterModel" :filter-changed="filterChanged" />
        <SpeedFilter :filter-model="filterModel" :filter-changed="filterChanged" />
        <MobileFilter :filter-model="filterModel" :filter-changed="filterChanged" />
    </div>
</template>

<script>
import MobileFilter from './mobile-filter.vue'
import ProductTypeFilter from './productType-filter.vue'
import SpeedFilter from './speed-filter.vue'

export default {
    data: function () {
        return {
            filterModel: {
                productTypes: {
                    broadband: true
                },
                speed: '',
                mobileData: ''
            },
            responsiveVisible: false
        }
    },
    components: { MobileFilter, ProductTypeFilter, SpeedFilter },
    methods: {
        filterChanged: () => console.log('filterChanged')
    },
    mounted() {
    }
}
</script>

<style lang="scss">
.filter-menu {
    width: 200px;
    padding: 0 8px;
    background-color: #dedede;
    height: 100%;
}
</style>