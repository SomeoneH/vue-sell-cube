<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click.stop="decrease">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="add"></div> <!-- .stop是防止点击事件的冒泡机制，确保按钮的有效点击局域正常 -->
  </div>
</template>

<script>
const EVENT_ADD = 'add'

export default {
  name: 'cart-control',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    decrease() {
      if (this.food.count) {
        this.food.count--
      }
    },
    add(event) {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1) // 原本data.json中的foods对象并不存在count属性，这里触发的点击事件给foods对象增加count属性，用来计算用户购买的数量。 感觉影响了单向数据流
        // console.log(this.food)
      } else {
        this.food.count++
      }
      this.$emit(EVENT_ADD, event.target) // 向外触发名为'add'的事件，同时获取DOM元素作为传参
      // console.log(event.target)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.cartcontrol
  display flex
  align-items center
  .cart-decrease
    display inline-block
    padding 6px
    opacity 1 // 注释掉后没有影响动画效果
    .inner
      display inline-block
      line-height 24px
      font-size $fontsize-large-xxx
      color $color-blue
      transition all 0.4s linear
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity 0
      transform translate3d(24px, 0, 0) // 三维坐标轴上运动的量
      .inner
        transform rotate(180deg) // 2D的旋转，参数为角度
  .cart-count
    width 12px
    line-height 24px
    text-aligh center
    font-size $fontsize-small-s
    color $color-gray
  .cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size $fontsize-large-xxx
    color $color-blue
</style>
