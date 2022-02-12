<template>
  <a :href="url" class="nav-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navigationLink",
  data() {
    return {};
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>