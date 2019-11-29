<template>
  <aside class="header-wrapper">
    <span class="table-title">{{ $store.state.tableTitle }}</span>
  
    <!-- <md-snackbar :md-active.sync="change" value="">The user {{ lastUser }} was saved with success!</md-snackbar> -->
  </aside>
</template>

<script lang="ts">

</script>


<style lang='scss' scoped>
.header-wrapper {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
}

.logout {
  border-top: 1px solid #ddd;
}

.md-list-item-content {
  height: 30px !important;
  min-height: 30px !important;
}
</style>
