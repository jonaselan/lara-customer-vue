<template>
    <div class="chat-app">
        <conversation></conversation>
        <users-list></users-list>
    </div>
</template>

<script>
    import Conversation from "./Conversation";
    import UsersList from "./UsersList";

    export default {
        name: 'chat',
        components: {
            UsersList,
            Conversation
        },
    }
</script>

<style lang="scss" scoped>
    .chat-app {
        display: flex;
    }
</style>
