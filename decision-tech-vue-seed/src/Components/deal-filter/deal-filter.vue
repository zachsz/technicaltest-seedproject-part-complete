<template>
    <ul class="filter-menu">
        <li>
            <input id="filter-broadband" type="checkbox" v-model="filter.broadband" @change="handleFilterChange" value="broadband" />
            <label for="filter-broadband">Broadband</label>
        </li>
        <li>
            <input id="filter-tv" type="checkbox" v-model="filter.tv" @change="handleFilterChange" value="tv" />
            <label for="filter-tv">TV</label>
        </li>
        <li>
            <input id="filter-mobile" type="checkbox" v-model="filter.mobile" @change="handleFilterChange" value="mobile" />
            <label for="filter-mobile">Mobile</label>
        </li>
    </ul>
</template>

<script>
export default {
    data: function () {
        return {
            filter: {
                broadband: false,
                tv: false,
                mobile: false
            }
        };
    },
    methods: {
        handleFilterChange(event) {
            console.log(event);
        }
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