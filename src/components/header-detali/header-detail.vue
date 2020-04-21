<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail" @touchmove.stop.prevent>
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports" v-if="seller.supports">
            <li
            class="support-item"
            v-for="(item,index) in seller.supports"
            :key="index"
            >
              <support-ico :size="2" :type="item.type"></support-ico>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  import SupportIco from '../support-ico/support-ico'
  import Star from '../star/star'
  import popupMixin from 'common/mixins/popup'
  export default {
    name: 'header-detail',
    mixins: [popupMixin], // 代替data
    components: {
      SupportIco,
      Star
    },
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    // data() {
    //   return {
    //     visible: false
    //   }
    // },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  @import '~common/stylus/variable'
  .header-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(10px)
    opacity: 1
    color: $color-white
    background: $color-background-s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    .detail-main
      margin-top: 64px
      padding-bottom: 64px
      .name
        line-height: 16px
        text-align: center
        font-size: $fontsize-large
        font-weight: 700
      .star-wrapper
        margin-top: 18px
      .title
        display: flex
        width: 80%
        margin: 28px auto 24px auto
        .line
          flex: 1
          position: relative
          top: -6px
          border-bottom:  1px solid rgba(255, 255, 255, 0.2)
        .text
          padding: 0 12px
          font-weight: 700
          font-size: $fontsize-medium
      .supports
        width: 80%
        margin: 0 auto
        .support-item
          display: flex
          align-items: center
          padding: 0 12px
          margin-bottom: 12px
          &:last-child
            margin-bottom: 0
          .support-ico
            margin-right: 6px
          .text
            line-height: 16px
            font-size: $fontsize-small
      .bulletin
        width: 80%
        margin: 0 auto
        .content
          line-height: 24px
          font-size: $fontsize-small
          padding: 0 12px
    .detail-close
      position: relative
      width: 30px
      height: 30px
      margin: 0 auto
      clear: both
      font-size: $fontsize-large-xxxx
</style>
