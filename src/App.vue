<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
<!--    <header-detail :seller="seller"></header-detail>-->
<!--    <star size="24" :score="seller.score"></star>-->
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
// import HeaderDetail from 'components/header-detali/header-detail'
import Star from 'components/star/star'
import Tab from 'components/tab/tab'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import { getSeller } from 'api'
import qs from 'query-string'

export default {
  name: 'App',
  components: {
    VHeader,
    // HeaderDetail,
    Star,
    Tab
  },
  computed: {
    tabs() {
      return [{
        label: '商品',
        component: Goods,
        data: { seller: this.seller }
      }, {
        label: '评价',
        component: Ratings,
        data: { seller: this.seller }
      }, {
        label: '商家',
        component: Seller,
        data: { seller: this.seller }
      }]
    }
  },
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  created() {
    // console.log(this.seller.id)
    this._getSeller()
  },
  // mounted() {
  //   console.log(this.seller.id)
  // },
  methods: {
    _getSeller() {
      getSeller({
        id: this.seller.id
      }).then(seller => {
        this.seller = seller
      })
    // _getSeller () {
    //   getSeller().then((seller) => {
    //     this.seller = seller
    //   })
    }
  }
}
</script>

<style lang="stylus">
#app
  .tab-wrapper
    position: fixed
    top: 136px
    right: 0
    bottom: 0
    left: 0
</style>
