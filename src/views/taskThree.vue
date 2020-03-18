<template>
    <div class="container">
        <div class="task-three">
            <h1>Task 3</h1>
            <span>Write script that will parse query params from url and transform it into object with according key
                    and value.
            </span>
            <div class="task-three__url-parse">
                <span>{{url}}</span>
                <button @click="parse">Parse</button>
                <div v-if="parseUrl" class="task-three__url-parse-result">
                    <pre>{{parseUrl}}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    url: 'http://localhost:63342/test/index.html?em=world&ew=book&testttt=2',
    parseUrl: null
  }),
  methods: {
    parse () {
      this.parseUrl = this.url.slice(this.url.indexOf('?') + 1).split('&').reduce((params, hash) => {
        let [key, val] = hash.split('=')
        return Object.assign(params, {[key]: decodeURIComponent(val)})
      }, {});
    }
  }
}
</script>

<style lang="scss">
    .task-three{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__url-parse{
            margin-top: 30px;
            button{
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                outline: none;
                border: none;
                color: #ffffff;
                padding: 8px 10px;
                font-size: 15px;
                font-weight: 500;
                cursor: pointer;
                background: #bdbd44;
                margin-top: 12px;
            }
            &-result{
                margin-top: 30px;
                text-align: left;
                padding: 12px;
                background: #eeeeee;
            }
        }
    }
</style>