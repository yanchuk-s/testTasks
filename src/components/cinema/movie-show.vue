<template>
    <div class="movie-shows-wrp">
        <div class="tickets">
            <div class="movie-screen">
                Screen
                <span></span>
            </div>
            <div v-for="(row, index) in movieShow.places"
                 :key="index"
                 class="tickets-row"
            >
                <button v-for="(place, i) in row"
                        :key="i" class="tickets-places"
                        :class="{'not-free' : !place.isFree, 'check-place' : place.position == checkPlace && checkRow == index && checkId == movieShow._id}"
                        :disabled="!place.isFree"
                        @click="choosePlace(movieShow._id,index,place.position,)"
                >
                    {{place.position + 1}}
                </button>
            </div>
            <div v-if="placeCheked && checkId == movieShow._id" class="buy-ticket">
                <button @click="buyTicket">
                    Buy TICKET
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['movieShow'],
  data: () => ({
    checkId: '',
    checkRow: null,
    checkPlace: null,
    placeCheked: false,
  }),
  methods: {
    ...mapActions('cinema', [
      'bookingPlace',
    ]),
    choosePlace (id,row,place) {
      this.checkId = id;
      this.checkRow = row;
      this.checkPlace = place;
      this.placeCheked = true;
    },
    buyTicket () {
      let bookingData = {
        movieShow_id: this.checkId,
        row_id: this.checkRow,
        place_position: this.checkPlace,
        isFree: true
      };
      this.checkId = null;
      this.checkRow = null;
      this.checkPlace = null;
      this.placeCheked = false;

      this.bookingPlace(bookingData);
    }
  }
}
</script>

<style lang="scss">
    .movie-shows-wrp{
        width: 100%;
        .tickets{
            width: 100%;
            align-items: center;
            .movie-screen{
                display: flex;
                flex-direction: column;
                margin-bottom: 30px;
                span{
                    display: block;
                    width: 450px;
                    height: 20px;
                    border-top: 9px solid #eeeeee;
                    border-radius: 50%;
                }
            }
            .buy-ticket{
                margin: 30px 0;
                button{
                    width: 200px;
                    height: 42px;
                    background: green;
                    border: none;
                    outline: none;
                    color: #ffffff;
                    font-weight: 600;
                    cursor: pointer;
                }
            }
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            .tickets-row{
                display: flex;
                .tickets-places{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 25px;
                    height: 25px;
                    margin: 8px;
                    cursor: pointer;
                    border: 1px solid #eeeeee;
                    color: #ffffff;
                    outline: none;
                    background: none;
                    &:disabled{
                        cursor: default;
                    }
                }
                .not-free{
                    background: red;
                }

                .check-place{
                    background: #4ada4a;
                }
            }
        }
    }
</style>