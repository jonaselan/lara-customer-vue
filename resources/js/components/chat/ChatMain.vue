<template>
    <div class="chat-app">
        <ChatConversation/>
        <ChatUsersList/>
    </div>
</template>

<script>
    import ChatConversation from "./ChatConversation";
    import ChatUsersList from "./ChatUsersList";
    import { mapGetters } from 'vuex';

    export default {
        name: 'ChatMain',
        components: {
            ChatConversation,
            ChatUsersList,
        },
        computed: {
            ...mapGetters([
                'currentUser',
                'selectedUser',
            ])
        },
        mounted() {
            // window.Echo.private(`messages.${this.currentUser.id}`)
            //     .listen('NewMessage', (e) => {
                    // e.message vem do broadcastWith, dentro do evento NewMessage
                    // this.handleIncomming(e.message)
                // })
        },
        methods: {
            handleIncomming(message) {
                // se a mensagem for direcionada para o usuário atual (a conversa está aberta)
                if (this.selectedUser && message.from === this.selectedUser.id) {
                    this.$store.dispatch('newMessage', message.content);
                    return;
                }

                alert('sim');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-app {
        display: flex;
    }
</style>
