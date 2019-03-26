<template>
    <div class="conversation">
        <h1> {{ customer ? customer.name : 'Select a customer }}</h1>
        <messages-feed></messages-feed>
        <messages-composer></messages-composer>
    </div>
</template>

<script>
    import MessagesFeed from "./MessagesFeed";
    import MessagesComposer from "./MessageComposer";

    export default {
        name: "Conversation",
        components: {
            MessagesComposer,
            MessagesFeed
        },
    }
</script>

<style scoped>

</style>
