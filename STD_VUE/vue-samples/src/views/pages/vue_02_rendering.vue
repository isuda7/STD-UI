<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">Rendering</h2>
    </div>
    <!-- s:v-if -->
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>v-if</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>v-if</h4>
        <ul>
          <li>
            <code>v-if="ok"</code> ok키값이 true일때 보여준다.
            <br />
            <span v-if="ok">OK</span>
          </li>
        </ul>

        <h4 class="mt-4">v-else</h4>
        <ul>
          <li>
            <code>v-else</code> 엘리먼트는
            <code>v-if</code> 엘리먼트 또는
            <code>v-else-if</code> 엘리먼트 바로 뒤에 있어야 합니다.
            <div v-if="Math.random() > 0.5">이제 나를 볼 수 있어요.</div>
            <div v-else>이제는 안보입니다.</div>
          </li>
        </ul>

        <h4 class="mt-4">v-else-if</h4>
        <ul>
          <li>
            <code>v-else</code>와 마찬가지로, <code>v-else-if</code> 엘리먼트는 <code>v-if</code> 또는 <code>v-else-if</code> 엘리먼트 바로 뒤에 와야 합니다.
            <div v-if="type === 'A'">A</div>
            <div v-else-if="type === 'B'">B</div>
            <div v-else-if="type === 'C'">C</div>
            <div v-else>Not A/B/C</div>
          </li>
        </ul>

        <h4 class="mt-4">key</h4>
        <ul>
          <li>
            <code>v-else</code>와 마찬가지로, <code>v-else-if</code> 엘리먼트는 <code>v-if</code> 또는 <code>v-else-if</code> 엘리먼트 바로 뒤에 와야 합니다.
            <div v-if="type === 'A'">A</div>
            <div v-else-if="type === 'B'">B</div>
            <div v-else-if="type === 'C'">C</div>
            <div v-else>Not A/B/C</div>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: v-if -->

    <!-- s: Key -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3></h3>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>
    <!-- e: Key -->
  </div>
</template>

<script>
export default {
  name: "VueRendering",
  data() {
    return {
      ok: true
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>