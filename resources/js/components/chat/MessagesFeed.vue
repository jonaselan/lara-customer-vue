<template>
    <div class="messages-feed">
        <ul v-if="selectedUser">
            <li v-for="message in messages"
                :class="`message ${message.to === selectedUser.id ? 'sent' : 'received'}`"
                :key="message.id">
                <div class="text">
                    {{ message.content }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "MessagesFeed",
        computed: {
            ...mapGetters([
                'messages',
                'selectedUser',
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .feed {
        background: #f0f0f0;
        height: 100%;
        max-height: 470px;
        overflow: scroll;
        ul {
            list-style-type: none;
            padding: 5px;
            li {
                &.message {
                    margin: 10px 0;
                    width: 100%;
                    .text {
                        max-width: 200px;
                        border-radius: 5px;
                        padding: 12px;
                        display: inline-block;
                    }
                    &.received {
                        text-align: right;
                        .text {
                            background: #b2b2b2;
                        }
                    }
                    &.sent {
                        text-align: left;
                        .text {
                            background: #81c4f9;
                        }
                    }
                }
            }
        }
    }
</style>
