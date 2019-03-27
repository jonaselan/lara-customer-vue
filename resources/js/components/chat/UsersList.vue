<template>
    <div class="users-list">
        <ul>
            <li v-for="user in users"
                :key="user.id"
                @click="selectUser(index, user)"
                :class="{ 'selected': index == selected}">
                <div class="avatar">
                    <img src="http://via.placeholder.com/150x150" :alt="user.id">
                </div>
                <div class="user">
                    <p class="name">{{user.name}}</p>
                    <p class="email">{{user.email}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UsersList",
        data() {
            return {
                selected: 0
            }
        },
        beforeMount() {
            if (this.users.length) {
                return;
            }

            this.$store.dispatch('getUsers');
        },
        computed: {
            users() {
                return this.$store.getters.users
            },
        },
        methods: {
            selectUser(index, user) {
                this.selected = index;

                this.$state.dispatch('selectUser', user);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .users-list {
        flex: 2;
        max-height: 600px;
        overflow: scroll;
        border-left: 1px solid #a6a6a6;

        ul {
            list-style-type: none;
            padding-left: 0;
            li {
                display: flex;
                padding: 2px;
                border-bottom: 1px solid #aaaaaa;
                height: 80px;
                position: relative;
                cursor: pointer;
                &.selected {
                    background: #dfdfdf;
                }
                span.unread {
                    background: #82e0a8;
                    color: #fff;
                    position: absolute;
                    right: 11px;
                    top: 20px;
                    display: flex;
                    font-weight: 700;
                    min-width: 20px;
                    justify-content: center;
                    align-items: center;
                    line-height: 20px;
                    font-size: 12px;
                    padding: 0 4px;
                    border-radius: 3px;
                }
                .avatar {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    img {
                        width: 35px;
                        border-radius: 50%;
                        margin: 0 auto;
                    }
                }
                .user {
                    flex: 3;
                    font-size: 10px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p {
                        margin: 0;
                        &.name {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>
