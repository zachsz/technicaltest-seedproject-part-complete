<template>
    <div class="deals-layout">
        <FilterBar/>
        <div class="deals-layout__grid">
            <BroadbandGrid :broadband-deals="deals" />
        </div>
    </div>
</template>

<script>
import FilterBar from '../filterbar-component/filterbar-component.vue';
import BroadbandGrid from '../grid-component/grid-component.vue';
import { getBroadbandDeals } from '../../services/api';

export default {
    data: function () {
        return {
            deals: []
        }
    },
    components: { FilterBar, BroadbandGrid },
    created: function () {
        getBroadbandDeals().then(deals => this.deals = deals)
    }
}
</script>

<style lang="scss">
.deals-layout {
    display: flex;
    height: 100%;
    max-width: 1260px;
    margin: 0 auto;
    width: 100%;
    &__grid {
        flex: 1;
    }
}
</style>