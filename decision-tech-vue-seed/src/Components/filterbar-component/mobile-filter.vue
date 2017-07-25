<template>
    <div v-if="filterModel.productTypes.mobile">
        <div>Mobile Data</div>
        <select v-model="filterModel.mobileData" @change="filterChanged()" >
            <option value="">Any</option>
            <option value="2">2GB</option>
            <option value="5">5GB</option>
        </select>
    </div>
</template>
<script>
export default {
    props: ['filterModel', 'filterChanged']
}
</script>