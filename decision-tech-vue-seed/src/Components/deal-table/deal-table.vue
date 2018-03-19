
<template>
    <table class="broadband-grid">
        <thead class="broadband-grid__headings">
            <tr>
                <th>About</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody class="broadband-grid__section">
            <tr class="broadband-grid__deal" v-for="deal in deals" v-bind:key="deal.id">
                <td class="broadband-grid__deal__property">{{deal.title}}</td>
                <td class="broadband-grid__deal__property">£{{deal.cost}}</td>    
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['deals']
}
</script>

<style lang="scss">
.broadband-grid {
    width: 100%;
    &__deal__property {
        text-align: center;
        padding: 8px;
    }
}
</style>
