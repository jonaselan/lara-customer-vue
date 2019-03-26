<template>
    <div class="message-composer">
        <textarea v-model="message" @keydown.enteder="send" placeholder="Message..."></textarea>
    </div>
</template>

<script>
    export default {
        name: "MessagesComposer",
        data() {
            return {
                message: '',
            }
        },

    }
</script>

<style scoped>

</style>
