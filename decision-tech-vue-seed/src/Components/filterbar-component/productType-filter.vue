<template>
    <ul>
        <li><input type="checkbox" disabled v-model="filterModel.productTypes.broadband" @change="filterChanged()" /> Broadband</li>
        <li><input type="checkbox" v-model="filterModel.productTypes.tv" @change="filterChanged()"  /> TV</li>
        <li><input type="checkbox" v-model="filterModel.productTypes.mobile" @change="filterChanged()"  /> Mobile</li>
    </ul>
</template>
<script>
export default {
    props: ['filterModel', 'filterChanged']
}
</script>