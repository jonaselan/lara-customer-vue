<template>
    <div class="chat-app">
        qwe
        <conversation></conversation>
        <customers-list></customers-list>
    </div>
</template>

<script>
    import Conversation from "./Conversation";
    import CustomersList from "./CustomersList";

    export default {
        name: 'chat',
        components: {
            CustomersList,
            Conversation
        },
    }
</script>
