<template>
    <div class="container">
        <div class="task-two">
            <h1>Task 2</h1>
            <div class="task-two__form">
                <input placeholder="text some numbers" v-model="val" class="task-two__form-input" type="number">
                <div class="task-two__form-buttons">
                    <button class="set"
                            :disabled="!val"
                            @click="set">
                        Set
                    </button>
                    <button class="clear"
                            @click="clear"
                            v-if="hasValInStorage">
                        Clear
                    </button>
                </div>
            </div>
            <div v-if="hasValInStorage && valFromStorage"
                 class="task-two__val-from-ls"
                 :class="{'value-is-even' : oddOrEven}"
            >
                {{valFromStorage}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data: () => ({
    val: '',
    valFromStorage: '',
    hasValInStorage: false,
    oddOrEven: null
  }),
  created () {
    if (localStorage.getItem('num23')) {
      this.val = localStorage.getItem('num23');
      this.valFromStorage = localStorage.getItem('num23');
      this.hasValInStorage = true;
      this.oddOrEven = (this.val%2 == 0);
    }
  },
  methods: {
    set () {
      localStorage.setItem('num23', this.val);
      this.hasValInStorage = true;
      this.valFromStorage = '';
    },
    clear () {
      localStorage.removeItem('num23');
      this.val = '';
      this.hasValInStorage = false;
    }
  }
};
</script>

<style lang="scss">
    .task-two{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__form{
            margin-top: 30px;
            width: 400px;
            &-input{
                width: 100%;
                padding: 12px;
                outline: none;
                border-radius: 4px;
                border: 1px solid #eeeeee;
                box-sizing: border-box;
                &:focus{
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
            }
            &-buttons{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
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
                    &:disabled{
                        background: #cccccc;
                    }
                }
                .clear{
                    background: #ef6262;
                }
                .set{
                    background: #bdbd44;
                }
            }
        }
        &__val-from-ls{
            width: 400px;
            min-height: 100px;
            margin-top: 20px;
            text-align: left;
            color: #ffffff;
            padding: 10px;
            box-sizing: border-box;
            background: #ef6262;
        }
        .value-is-even{
            background: #bdbd44;
        }
    }
</style>