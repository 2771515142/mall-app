<template>
  <div class="history">
    <h4>历史记录</h4>
    <div class="his-item"
    v-for="item in searchList"
    :key="item.time"
    @click="search(item.value)"
    >{{ item.value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      default() {
        return [];
      },
    },
  },
  methods: {
    search(value) {
      this.$emit('search', value);
    },
  },
};
</script>

<style lang="less" scoped>
  .his-item{
    padding:5px 10px;
    background:#efefef;
    border-radius:5px;
    margin-top:10px;
    margin-right:10px;
    margin-bottom:10px;
    display:inline-block;
  }
</style>
