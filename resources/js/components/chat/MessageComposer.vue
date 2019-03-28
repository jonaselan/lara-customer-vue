<template>
    <div class="message-composer">
        <textarea v-model="message" @keydown.enter="send" placeholder="Message..."></textarea>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "MessagesComposer",
        data() {
            return {
                message: '',
            }
        },
        computed: {
            ...mapGetters([
                'selectedUser'
            ])
        },
        methods: {
            send(e) {
                e.preventDefault();

                if (this.message === '') {
                    alert('Typing the message');
                    return;
                }

                this.$store.dispatch('sendMessage', {
                    sender_id: this.selectedUser.id,
                    text: this.message,
                });

                this.message = '';
            }
        },
    }
</script>

<style lang="scss" scoped>
    .message-composer textarea {
        width: 96%;
        margin: 10px;
        resize: none;
        border-radius: 3px;
        border: 1px solid lightgray;
        padding: 6px;
    }
</style>
