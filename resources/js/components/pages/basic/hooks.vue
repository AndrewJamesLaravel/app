<template>
    <div>
        <h1 ref="myref">Hook tutorial</h1>
        <p>My name is: {{ name }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Andrew'
            }
        },
        beforeCreate() {
            console.log(this.name)
        },
        created() {
            console.log('data and another function is available but not html', this.name)
        },
        mounted() {
            console.log(this.$refs.myref)
        },
    }
</script>

<style scoped>

</style>