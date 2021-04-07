<template>
  <div class="side-bar-wrapper" ref="side" >
      <div>全部</div>
  </div>
</template>

<script>

export default {

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
