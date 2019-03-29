<template>
    <div class="conversation">
        <h1> {{ selectedUser ? selectedUser.name : 'Select a user' }}</h1>
        <ChatMessagesFeed/>
        <ChatMessagesComposer/>
    </div>
</template>

<script>
    import ChatMessagesFeed from "./ChatMessagesFeed";
    import ChatMessagesComposer from "./ChatMessageComposer";
    import { mapGetters } from 'vuex';

    export default {
        name: "ChatConversation",
        data() {
            return {
                user: ''
            }
        },
        components: {
            ChatMessagesComposer,
            ChatMessagesFeed
        },
        computed: {
            ...mapGetters([
               'selectedUser'
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    .conversation {
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1 {
            font-size: 20px;
            padding: 10px;
            margin: 0;
            border-bottom: 1px dashed lightgray;
        }
    }
</style>
