<template>
  <div style="height:100%">
      <div class="zuoye">
          {{title}}{{content}}
      </div>
        <strong></strong>
  </div>
   
</template>
<style lang="scss" scoped>
    .zuoye{
        width: calc(100% - 40px);
        box-sizing: border-box;
        margin:30px 20px;
        padding: 10px;
        text-align: left;
        font-size: 14px;
        color: white;
        background: #092149;
        border-radius: 5px;
        margin-bottom: 0
    }

    // strong{
    //     display: block;
    //     width: 100%;
    //     height: 25px;
    // }

</style>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
    @Prop() title?:string
    @Prop() content?:string
};
</script>

