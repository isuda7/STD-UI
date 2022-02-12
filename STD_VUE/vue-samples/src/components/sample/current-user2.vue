<template>
  <span>
      <slot v-bind:user="user">
        {{ user.lastName}}
      </slot>
  </span>
</template>

<script>
export default {
  name: "navigationLink",
  data() {
    return {
      message: "컴포넌트에서 받아온 데이터",
      user: {
        firstName: 'jo',
        lastName: 'changi'
      }
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>