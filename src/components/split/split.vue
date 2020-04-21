ponents/split/split.vue 0 → 100644 查看文件 @ 1a2065b
<template>
  <div class="split"></div>
</template>

<script>
export default {
  name: 'split'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.split
  width 100%
  height 16px
  border-top 1px solid $color-row-line
  border-bottom 1px solid $color-row-line
  background $color-background-ssss
</style>
