<template>
  <div>
    <ul>
      <item v-for="item in items" :key="item"  :item="item"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components:{
    Item,
  },
  data() {
    return {
      items: ['item1', 'item2', 'item3', 'item4', 'item5'],
    }
  }
}
</script>

<style>

</style>