<template>
    <header>
        <div class="container">
            <div class="nav">
                <router-link to="/">Task One</router-link>
                <router-link to="/task-two">Task Two</router-link>
                <router-link to="/task-three">Task Three</router-link>
                <router-link to="/task-four">Task Four</router-link>
                <router-link to="/cinema/movies">Cinema</router-link>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    header{
        border-bottom: 1px solid #dfe1e5;
        .nav{
            height: 40px;
            display: flex;
            align-items: center;
            a{
                color: #000000;
                margin-right: 12px;
                font-weight: 500;
                display: flex;
                height: 100%;
                align-items: center;
                text-decoration: none;
                border-top: 2px solid #ffffff;
            }
            .router-link-exact-active{
                border-top: 2px solid red;
            }
        }
    }
</style>