<template>
    <div class="container">
        <div class="task-four">
            <h1>Task 4</h1>
            <div v-if="products" class="task-four__products-list">
                <div class="task-four__products-list-product"
                     v-for="product in products"
                     :key="product.id"
                >
                    <div class="id">
                        # {{product.id}}
                    </div>
                    <div class="title">
                        <div>{{product.title}}</div>
                        <div>{{product.sku}}</div>
                    </div>
                    <div class="img">
                        <img :src="product.image" :alt="product.title">
                    </div>
                    <div class="options" v-for="(option, index) in product.options" :key="index">
                        <div>PRODUCT OPTIONS:</div>
                        <span>Metal type: {{option.metal_type}}</span>
                        <span>Metal color: {{option.metal_color}}</span>
                        <span>Stone shape: {{option.stone_shape}}</span>
                        <span>Gemstone color: {{option.gemstone_color}}</span>
                    </div>
                    <div class="price">
                        {{productPrice(product.price)}}  $
                    </div>
                </div>
            </div>
            <div v-else>
                There are no products
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  created () {
    this.getProducts();
  },
  computed: {
    ...mapGetters([
      'products'
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts'
    ]),
    productPrice (price) {
      return Number.parseInt(price).toFixed(2);
    }
  }
}
</script>

<style lang="scss">
    .task-four{
        &__products-list{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            &-product{
                border: 1px solid #eeeeee;
                border-radius: 4px;
                padding: 12px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                flex-basis: calc(20% - 6px);
                -ms-flex: auto;
                margin: 0 0 6px 6px;
                box-sizing: border-box;
                &:last-child{
                    margin-right: 0;
                }
                .title{
                    margin-bottom: 12px;
                    font-size: 16px;
                    font-weight: 500;
                }
                .img{
                    img{
                        width: 100%;
                        max-width: 250px;
                    }
                    margin-bottom: 12px;
                }
                .options{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 18px;
                    div{
                        text-align: center;
                        margin-bottom: 6px;
                        font-size: 14px;
                        font-weight: 600;
                    }
                    span{
                        display: flex;
                        justify-content: flex-start;
                        font-size: 12px;
                    }
                }
                .price{
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
    }
    @media(max-width: 1333px) {
        .task-four {
            &__products-list{
                &-product{
                    flex-basis: calc(33.33% - 6px);
                }
            }
        }
    }
    @media(max-width: 991px) {
        .task-four {
            &__products-list{
                &-product{
                    flex-basis: calc(50% - 6px);
                }
            }
        }
    }
    @media(max-width: 555px) {
        .task-four {
            &__products-list{
                &-product{
                    flex-basis: 100%;
                    margin: 0 0 6px 0;
                }
            }
        }
    }
</style>