<template>
  <div class="tab">
    <cube-tab-bar
    :useTransition="false"
    :show-slider="true"
    v-model="selectedLabel"
    :data="tabs"
    ref="tabBar"
    class="border-bottom-1px"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
      :initial-index="index"
      :loop="false"
      :auto-play="false"
      :show-dots="false"
      ref="slide"
      @change="onChange"
      @scroll="onScroll"
      :options="slideOptions"
      >
      <cube-slide-item
      v-for="(tab, index) in tabs"
      :key="index"
      >
        <component :is="tab.component" :data="tab.data" ref="component"></component>
      </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

export default {
  name: 'tab',
  components: {
    Goods,
    Ratings,
    Seller
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
      // default: () => [] // 箭头函数简易写法
    },
    // 预留的功能接口，可以接收APP传入的initialIndex的值来控制默认展示的Tab
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0 // 设置滚动时判断的阈值，防止出现斜向滚动
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        // console.log(newVal) // newVal的值为tabs中对应label的值
        this.index = this.tabs.findIndex(value => {
          // console.log(value) // value的值是含有对应label属性的对象 {label:'商品'}
          return value.label === newVal
        })
      }
    }
  },
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    onChange(currentSildeItem) {
      // cube-silde组件在切换时会触发change(value)事件，value参数为新切换到的sildeItem的索引值
      this.index = currentSildeItem
      const component = this.$refs.component[currentSildeItem]
      component.fetch && component.fetch()
      // if (component.fetch) {
      //   component.fetch()
      // }
    },
    onScroll(pos) {
      // console.log(pos) // x移动的值为负数
      // cube-silde组件在切换时会触发scroll(value)事件，需要设置options项linstenScroll:true和probeType:3才会触发scroll的监听，value返回的是第一个item的移动距离
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth // this.$refs.tabBar是一个组件实例，通过.$el获取DOM元素
      const slideWidth = this.$refs.slide.slide.scrollerWidth // this.$refs.slide里面有一个slide对象，this.$refs.slide.slide对象时一个Bscroll实例
      const transform = (-pos.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
      // console.log(tabBarWidth) // 375
      // console.log(slideWidth) // 1125
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.tab
  display: flex
  flex-direction: column
  height: 100%
  >>> .cube-tab
    padding: 10px 0
  .slide-wrapper
    flex: 1
    overflow: hidden
</style>
