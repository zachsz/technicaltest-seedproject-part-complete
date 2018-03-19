<template>
    <div class="filter-menu">
        <ul>
            <li>
                <input id="filter-broadband" type="checkbox" v-model="filter.broadband" @change="filterChanged" value="broadband" />
                <label for="filter-broadband">Broadband</label>
            </li>
            <li>
                <input id="filter-tv" type="checkbox" v-model="filter.tv" @change="filterChanged" value="tv" />
                <label for="filter-tv">TV</label>
            </li>
            <li>
                <input id="filter-mobile" type="checkbox" v-model="filter.mobile" @change="filterChanged" value="mobile" />
                <label for="filter-mobile">Mobile</label>
            </li>
        </ul>
    </div>
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
        filterChanged(event) {
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