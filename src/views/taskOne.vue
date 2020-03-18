<template>
  <div class="container">
    <div class="task-one">
        <h1>Task 1</h1>
        <span>Write a function that find the most frequent character in a string (case insensitive)</span>
        <div class="task-one__finder">
            <input v-model="str"
                   type="text"
                   placeholder="Text something for test"
            >
            <div class="task-one__finder-result"
                 v-if="character"
            >
                the most frequent character in a string (case insensitive) - <span>{{character}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    str: '',
    character: ''
  }),
  watch: {
    str (str) {
      let max = 0;
      let maxChar = '';
      let newStr = str.toLowerCase();
      newStr.split('').forEach((char) => {
        if(newStr.split(char).length > max) {
          max = newStr.split(char).length;
          maxChar = char;
        }
      });
      this.character = maxChar;
    }
  }
};
</script>

<style lang="scss">
    .task-one{
        &__finder{
            margin-top: 30px;
            input{
                padding: 12px;
                width: 300px;
                outline: none;
                border-radius: 4px;
                border: 1px solid #eeeeee;
                &:focus{
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
            }
            &-result{
                margin-top: 10px;
                span{
                    font-weight: 600;
                    font-size: 16px;
                }
            }
        }
    }
</style>