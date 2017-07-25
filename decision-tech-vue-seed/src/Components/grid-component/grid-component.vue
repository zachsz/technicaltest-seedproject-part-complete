
<template>
    <table class="broadband-grid">
        <thead class="broadband-grid__headings">
            <tr>
                <th>About</th>
                <th>contract length</th>
                <th>speed/usage</th>
                <th>Offer</th>
                <th>TV</th>
                <th>Mobile</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody class="broadband-grid__section">
            <tr class="broadband-grid__deal" v-for="deal in broadbandDeals">
                <td class="broadband-grid__deal__property">{{deal.title}}</td>
                <td class="broadband-grid__deal__property">{{deal.contractLength}}months</td>
                <td class="broadband-grid__deal__property">{{deal.speed.label}} MB
                    <br/> {{deal.usage.label}}</td>
                <td class="broadband-grid__deal__property">
                    <img v-bind:src="deal.offer.smallLogo" />
                </td>
                <td class="broadband-grid__deal__property" v-if="deal.popularChannels && deal.popularChannels.length > 0">
                    <div v-for="channel in deal.popularChannels">
                        <img v-bind:src="channel.logo" />
                    </div>
                </td>
                <td class="broadband-grid__deal__property" v-else>N/A</td>
                <td class="broadband-grid__deal__property"  v-if="deal.mobile">
                    Data: {{deal.mobile.data.label}}
                    <br/> Minutes: {{deal.mobile.minutes.label}}
                    <br/> Texts: {{deal.mobile.texts.label}}
                    <br/> Connection: {{deal.mobile.connectionType.label}}
                </td>
                <td class="broadband-grid__deal__property" v-else>N/A</td>
                <td class="broadband-grid__deal__property">£{{deal.prices[0].totalContractCost}}</td>    
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['broadbandDeals']
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
