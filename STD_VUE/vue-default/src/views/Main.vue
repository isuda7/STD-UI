<template>
  <main id="content" class="content" role="main">
    <div class="content-header">
      <div class="in-sec">
        <h1>content-header</h1>
      </div>
    </div>
    <div class="content-body">
      <div class="in-sec">
        <p>content-body</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    name: "",
    data() {
        return {}
    },
    created() {
    },
    watch: {
    },
    computed: {
    },
    methods: {
    },
    mounted() {
        this.$nextTick(function() {
            ui_init();
        });
    }
}
</script>
