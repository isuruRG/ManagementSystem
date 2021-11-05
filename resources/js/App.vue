<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$router.push({ name: "dashboard" }).catch(()=>{});
    },
};
</script>

<style scoped></style>
