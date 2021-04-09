<template>
  <div class="side-bar-wrapper" ref="side">
      <div
      v-for = "(item, i) in sideList"
      :key = "item"
      :class = "{active: index === i}"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
      >{{ i == 0 ? '全部' : item }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import tool from '../util/tool';

export default {
  data() {
    return {
      move: false,
      index: 0,
    };
  },
  computed: {
    ...mapState({
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    scrollTo(i, e) {
      if (this.move) {
        return;
      }
      this.index = i;
      const { side } = this.$refs;
      const sonTop = e.target.getBoundingClientRect().top;
      const sonHeight = e.target.offsetHeight;
      const pTop = side.getBoundingClientRect().top;
      const pHeight = side.offsetHeight;
      tool.moveTo(side.scrollTop, sonTop + sonHeight / 2 - pTop - pHeight / 2, side, 'scrollTop');
    },
  },

};

</script>

<style lang='less' scoped>
  .side-bar-wrapper {
    position: fixed;
    top: 135px;
    left: 0;
    width: 79px;
    bottom: 1.33333rem;
    background: #f8f8f8;
    overflow: auto;
     div {
        width: 100%;
        text-align: center;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        position: relative;
      }
      .active {
        font-weight: bold;
        color: #ff1a90;
      }
      .active::before {
        position: absolute;
        width: 6px;
        height: 18px;
        background: #ff1a90;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        content: '';
      }
  }
  .side-bar-wrapper::-webkit-scrollbar{
    width: 0px;
    background: none;
  }
</style>
