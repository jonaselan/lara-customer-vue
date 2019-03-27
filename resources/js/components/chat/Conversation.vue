<template>
    <div class="conversation">
        <h1> {{ user ? user.name : 'Select a user' }}</h1>
        <messages-feed></messages-feed>
        <messages-composer></messages-composer>
    </div>
</template>

<script>
    import MessagesFeed from "./MessagesFeed";
    import MessagesComposer from "./MessageComposer";
    import { mapGetters } from 'vuex';

    export default {
        name: "Conversation",
        data() {
            return {
                user: ''
            }
        },
        components: {
            MessagesComposer,
            MessagesFeed
        },
        computed: {
            // ...mapGetters([
            //    'user'
            // ]),
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
