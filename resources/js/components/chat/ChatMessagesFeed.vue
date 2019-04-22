<template>
    <div class="messages-feed" ref="feed">
        <transition name="loading">
            <Loading v-if="isLoading"/>
        </transition>
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
    import { mapGetters,mapState } from 'vuex';
    import Loading from "../Loading";

    export default {
        name: "ChatMessagesFeed",
        components: {
          Loading,
        },
        computed: {
            ...mapState([
                'selectedUser',
                'messages',
            ]),
            ...mapGetters([
                'messages',
                'selectedUser',
                'isLoading',
            ])
        },
        methods: {
            scrollToBottom() {
                setTimeout(() => {
                    this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
                }, 50);
            }
        },
        watch: {
            selectedUser(selectedUser) {
                this.scrollToBottom();
            },
            messages(messages) {
                this.scrollToBottom();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .messages-feed {
        background: #f0f0f0;
        height: 100%;
        max-height: 470px;
        overflow: scroll;

        .loading-enter-active {
            transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }

        .loading-enter {
            transform: translateX(10px);
            opacity: 0;
        }

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
