<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">컴포넌트</h2>
    </div>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>모듈시스템</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>등록하기</h4>
        <ul>
          <li>예시 <br>
            <code>&lt;my-component&gt;&lt;/my-component&gt;</code><br>
            <code>import myComponent from '@/components/sample/my-component.vue'</code><br>
            <code>components: { myComponent }</code>
          </li>
        </ul>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import myComponent from '@/components/sample/my-component.vue'
export default {
    name: "VueComponents",
    data() {
        return {}
    },
    components: {
      myComponent,
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
    }
}
</script>