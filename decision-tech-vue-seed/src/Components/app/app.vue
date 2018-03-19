<template>
    <div class="deals-layout">
        <DealFilter/>
        <div class="deals-layout__grid">
            <DealTable :deals="deals" />
        </div>
    </div>
</template>

<script>
import DealFilter from '../deal-filter/deal-filter.vue';
import DealTable from '../deal-table/deal-table.vue';
import data from '../../assets/deals.json';

export default {
    data: function () {
        return {
            deals: data.deals
        }
    },
    components: { DealFilter, DealTable }
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