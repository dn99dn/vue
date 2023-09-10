<template>
  <li>
    <slot>
      {{ item }}
    </slot>
  </li>
</template>

<script>
export default {
  props: [
    'item',
  ]
}
</script>

<style>

</style>