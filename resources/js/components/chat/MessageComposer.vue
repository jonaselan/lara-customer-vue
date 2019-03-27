<template>
    <div class="message-composer">
        <textarea v-model="message" @keydown.enter="send" placeholder="Message..."></textarea>
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
        methods: {
            send(e) {
                if (this.message === '') {
                    // se pá colocar um alerta de message
                    return;
                }

                // mutation for send message to array located on state

            }
        },
    }
</script>

<style scoped>

</style>
