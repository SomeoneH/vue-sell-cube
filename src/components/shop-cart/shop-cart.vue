<template>
  <div>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{ 'highlight': totalCount > 0 }"> <!-- totalCount大于0的时候才会有highlight这个动态类名，用来控制底部购物车icon的显示状态 -->
              <i class="icon-shopping_cart" :class="{ 'highlight': totalCount>0 }"></i>
            </div>
            <div class="num" v-show="totalCount > 0">
              <bubble :num="totalCount"></bubble>
            </div>
          </div>
          <div class="price" :class="{ 'highlight': totalPrice > 0 }">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass" @click="pay">{{payDesc}}</div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball, index) in balls" :key="index">
          <transition
          @before-enter="beforeDrop"
          @enter="dropping"
          @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div> <!-- 小球内层，配合实现复合的过渡动画效果 -->
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bubble from '../bubble/bubble.vue'

const BALL_LEN = 10
const innerClsHook = 'inner-hook'

function createBalls() {
  const ret = []
  for (let i = 0; i < BALL_LEN; i++) {
    ret.push({
      show: false
    })
  }
  return ret
}

export default {
  name: 'ShopCart',
  components: {
    Bubble
  },
  props: {
    selectFoods: {
      type: Array,
      default: () => []
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    fold: {
      type: Boolean,
      default: true
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      balls: createBalls(), // balls是一个数组，[{show:false}*10]
      listFold: this.fold // 遵循单项数据流原则，不能直修改props里面的fold,因此在data里定义一个变量listFold
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.selectFoods.forEach(food => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      let count = 0
      this.selectFoods.forEach(food => {
        count += food.count
      })
      return count
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        const diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass() {
      if (!this.totalPrice || this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  },
  watch: {
    fold(newVal) {
      this.listFold = newVal // 用watch监听fold的变化，确保传给shop-cart-sticky的fold: 'listFold'能及时更新
    },
    totalCount(newVal) {
      // 判断列表处在展开状态且totalCount等于0的时候
      if (!this.listFold && !newVal) {
        // console.log(Boolean(!0)) // Boolean(0)返回false,Boolean(!0)返回true
        this._hideShopCartList()
      }
    }
  },
  created() {
    this.dropBalls = [] // 用于记录下落的小球，处理连续点击的情况。因为该数据并不是响应式，因此不用放data里
    // this.listFold = true // 注释掉后，解决多次点击会让蒙层加深的问题
  },
  methods: {
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el // 把DOM元素复制一份，加入到ball对象的属性中
          // console.log(ball.el) //ball.el指向cart-add icon-add_circle
          this.dropBalls.push(ball) // [{show:true, el: div.cart-add.icon-add_circle} * 10]
          return
        }
      }
    },
    beforeDrop(el) {
      // console.log(el) // el指向ball，购物车图标下隐藏的小球
      const ball = this.dropBalls[this.dropBalls.length - 1]
      const rect = ball.el.getBoundingClientRect()
      // 配合getBoundingClientRect()算出点隐藏小球与DOM元素之间的差值
      const x = rect.left - 32
      const y = -(window.innerHeight - rect.top - 22)
      el.style.display = '' // 注释后不影响动画效果
      el.style.transform = el.style.webkitTransform = `translate3d(0, ${y}px, 0)` // 外层动画,只控制Y轴方向的运动
      // console.log(el.style.transform)
      // console.log(el.style.webkitTransform)
      // let a = 1
      // console.log(a) // 1
      // let b = 2
      // console.log(b) // 2
      // a = b = 3
      // console.log(a, b) // 3 3
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
    },
    dropping(el, done) {
      // 在before-enter阶段执行了beforeDrop(el)函数，让购物车图标中隐藏的小球移动到点击按钮的位置处，这里是一个过渡动画过程
      // 当一个动画完成，进行下一个动画的时候，要先重绘。
      this._reflow = document.body.offsetHeight
      el.style.transform = el.style.webkitTransform = 'translate3d(0, 0, 0)'
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = 'translate3d(0, 0, 0)'
      el.addEventListener('transitionend', done) // 完成过渡动画后触发transitionend事件
    },
    afterDrop(el) {
      const ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    },
    toggleList() {
      if (this.listFold) {
        // 用户没有把商品加入购物车时，直接return
        if (!this.totalCount) {
          return
        }
        this.listFold = false
        this._showShopCartList()
        this._showShopCartSticky() // 解决使用creteAPI生成组件后，shop-cart-list图层层级比较高，生成的列表会挡住shopcart图标的问题
      } else {
        this.listFold = true
        this._hideShopCartList()
      }
    },
    pay(e) {
      if (this.totalPrice < this.minPrice) {
        // console.log('判断了') // totalPrice有初始值0，即使等于0也会产生判断
        return
      }
      this.$createDialog({
        title: '支付',
        content: `您需支付：${this.totalPrice}元`
      }).show()
      // console.log(this.yanshi) // 两个均输出一个Vue组件实例
      // console.log(this.yanshi.show())
      // setTimeout(yanshi(),1000)
      e.stopPropagation() // 阻止冒泡，当执行了支付事件的时候，默认的操作【弹出购物列表】便不会执行
      // this.dialogComp = this.$createDialog({
      //   title: '支付',
      //   content: `支付${this.totalPrice}元`
      // })
      // this.dialogComp.show()
    },
    _showShopCartList() {
      // 此处做了缓存，当shopCartListComp是空的时候，才执行this.$createShopCartList，避免每次点击都要重新创建
      this.shopCartListComp =
        this.shopCartListComp ||
        this.$createShopCartList({
          $props: {
            selectFoods: 'selectFoods' // 使用字符串的方式传参数，保证数据是响应式的
          },
          $events: {
            hide: () => {
              // console.log('接收到hide事件了')
              this.listFold = true
            }, // 创建组件API的时候定义事件hide,当接收到子组件传递的hide事件时执行，保证用户在点击蒙层关闭购物车列表时，也能让this.listFold的值设置为true
            leave: () => {
              this._hideShopCartSticky()
            },
            add: el => {
              this.shopCartStickyComp.drop(el)
            }
          }
        })
      this.shopCartListComp.show()
    },
    _showShopCartSticky() {
      this.shopCartStickyComp =
        this.shopCartStickyComp ||
        this.$createShopCartSticky({
          $props: {
            selectFoods: 'selectFoods',
            deliveryPrice: 'deliveryPrice',
            minPrice: 'minPrice',
            fold: 'listFold',
            list: this.shopCartListComp
          }
        })
      this.shopCartStickyComp.show()
    },
    _hideShopCartList() {
      // this.shopCartListComp.hide()
      const comp = this.sticky ? this.$parent.list : this.shopCartListComp // 判断是隐藏原生shop-cart-list还是隐藏shop-cart-sticky
      // comp.hide && comp.hide()
      // 查看food时，没有创建shopCartList，监听totalCount，执行_hideShopCartList时，会找不到this.$parent.list，直接判断comp.hide，会报错，故加上comp的判断
      comp && comp.hide && comp.hide()
    },
    _hideShopCartSticky() {
      this.shopCartStickyComp.hide()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
.shopcart
  height 100%
  .content
    display flex
    background $color-background
    // font-size 0
    color $color-light-grey
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        background $color-background
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          background $color-dark-grey
          &.highlight
            background $color-blue
          .icon-shopping_cart
            line-height 44px
            font-size $fontsize-large-xxx
            color $color-light-grey
            &.highlight
              color $color-white
        .num
          position absolute
          top 0
          right 0
      .price
        display inline-block
        vertical-align top
        margin-top 12px
        line-height 24px
        padding-right 12px
        box-sizing border-box
        border-right 1px solid rgba(255, 255, 255, 0.1)
        font-weight 700
        font-size $fontsize-large
        &.highlight
          color $color-white
      .desc
        display inline-block
        vertical-align top
        margin 12px 0 0 12px
        line-height 24px
        font-size $fontsize-small-s
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-weight 700
        font-size $fontsize-small
        &.not-enough
          background $color-dark-grey
        &.enough
          background $color-green
          color $color-white
  .ball-container
    .ball
      position fixed
      left 32px
      bottom 22px
      z-index 200
      transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41) // 贝塞尔曲线
      .inner
        width 16px
        height 16px
        border-radius 50%
        background $color-blue
        transition all 0.4s linear
</style>
