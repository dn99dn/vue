<template>
  <input type="checkbox" :value="value" @click="onChangeEvent">
  <!-- <input type="checkbox" ref="ip" :value="value" @click="$emit('input', JSON.parse($event.target.value))"> -->
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
    }
  },
  methods: {
    onChangeEvent() {
      this.$emit('input', !this.value);
      // this.$emit('input', this.$refs.ip.value);
    }
  },
}
</script>