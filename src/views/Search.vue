<template>
  <div class="search-wrapper">
    <div class="search-head">
      <van-icon name="arrow-left" class="arr-left"/>
      <van-search
        class="search-content"
        v-model="value"
        show-action
        :placeholder="place"
        @search="onSearch"
        @input="input"
        @focus="focus"
      >
        <template #action v-if="showList">
          <div @touchend="onSearch(value)">搜索</div>
        </template>
        <template #action v-else>
          <van-icon name="cart-o" id="shop-car" />
        </template>
      </van-search>
    </div>
    <div class="like-search" v-if="likeList.length && showList">
      <van-list>
        <van-cell
        v-for="item in likeList"
        :key="item"
        @click="onSearch(item)"
        >
        <template>
          <span class="custom-title">{{ item }}</span>
        </template>
        </van-cell>
      </van-list>
    </div>
    <div class="goods-list" v-if="showList">
      <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check = "false"
          >
            <goods-card
            v-for = "item in goodsList"
            :key = "item.id"
            v-bind = "item"
            :num = "counterMap[item.id]"
            ></goods-card>
          </van-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import goodsCard from '../components/GoodsCard.vue';

export default {
  data() {
    return {
      place: '酒',
      value: this.place,
      likeList: [],
      timer: null,
      loading: false,
      finished: false,
      page: 1,
      size: 5,
      goodsList: [],
      total: 0,
      showList: true,
    };
  },
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
  },
  methods: {

    async onLoad() {
      const value = await this.$api.search(this.value, this.page, this.size);
      this.goodsList = [...this.goodsList, ...value.list];
      this.total = value.total;
      if (this.goodsList.length >= this.total) {
        this.finished = true;
      } else {
        this.page += 1;
      }
    },
    onSearch(value) {
      if (value) {
        this.value = value;
      } else {
        this.value = this.place;
      }
      this.likeList = [];
      this.page = 1;
      this.finished = false;
      this.onLoad();
    },
    // 防抖
    async input() {
      if (this.value === '') {
        this.likeList = [];
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          const value = await this.$api.likeSearch(this.value);
          this.likeList = value.result;
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    focus() {

    },
  },
  components: {
    goodsCard,
  },
};
</script>

<style lang="less" scoped>
  .search-wrapper{
    width:100%;
    height:100vh;
    z-index:10;
    background:#fff;
    .search-head{
      width:345px;
      background:#fff;
      margin:0px auto;
      display:flex;
      align-items: center;
      position:fixed;
      top:0;
      left:15px;
      z-index:22;
      .arr-left{
        font-size:22px;
      }
      .search-content{
        flex:1;
      }
    }
    .like-search{
      position:relative;
      top:50px;
      width:100%;
      box-sizing: border-box;
      padding-left:30px;
    }
    .goods-list{
      position:relative;
      width:345px;
      margin:48px auto 0;
      z-index:10;
      background:#fff;
    }
  }

</style>
