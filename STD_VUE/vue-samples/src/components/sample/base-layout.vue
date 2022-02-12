<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "myComponent",
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