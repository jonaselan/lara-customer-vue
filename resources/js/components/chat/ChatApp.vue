<template>
    <div class="chat-app">
        <conversation></conversation>
        <users-list></users-list>
    </div>
</template>

<script>
    import Conversation from "./Conversation";
    import UsersList from "./UsersList";
    import { mapGetters } from 'vuex';

    export default {
        name: 'chat',
        components: {
            UsersList,
            Conversation
        },
        computed: {
            ...mapGetters([
                'currentUser',
                'selectedUser',
            ])
        },
        mounted() {
            Echo.private(`messages.${this.currentUser.id}`)
                .listen('NewMessage', (e) => {
                    // e.message vem do broadcastWith, dentro do evento NewMessage
                    alert(e.message);
                    // this.handleIncomming(e.message)
                })
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
