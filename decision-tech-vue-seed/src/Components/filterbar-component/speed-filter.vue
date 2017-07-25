<template>
    <div v-if="filterModel.productTypes.broadband">
        <div>Speed</div>
        <select v-model="filterModel.speed" @change="filterChanged()">
            <option value="">Any</option>
            <OPTION value="17408">17MB</option>
            <OPTION value="53248">52MB</option>
            <OPTION value="77824">76MB</option>
        </select>
    </div>
</template>
<script>
export default {
    props: ['filterModel', 'filterChanged']
}
</script>