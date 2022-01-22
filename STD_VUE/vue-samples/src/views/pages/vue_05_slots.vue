<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">슬롯</h2>
    </div>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>슬롯에 들어가는 내용</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <navigation-link url="/profile">
          Your Profile
        </navigation-link>
        <ul>
          <li>슬롯이 있는 경우, 그 자리에 컴포넌트의 내용이 들어간다.</li>
          <li>슬롯이 없는 경우, 그 자리의 모든 내용이 무시된다.</li>
        </ul>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>컴파일 될 때의 범위</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <navigation-link url="/profile">
          Logged in as {{ user.name }}
        </navigation-link>
        <ul>
          <li>슬롯이 있는 경우, 그 자리에 컴포넌트의 내용이 들어간다.</li>
          <li>슬롯이 없는 경우, 그 자리의 모든 내용이 무시된다.</li>
        </ul>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>기본값 지정</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <submit-button>
          Button
        </submit-button>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>이름이 있는 슬롯</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
          <base-layout>
            <template v-slot:header>
              <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
              <p>Here's some contact info</p>               
            </template>
          </base-layout>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>범위가 있는 슬롯</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>단독 디폴트 슬롯을 위한 축약 문법(Abbreviated Syntax for Lone Default Slots)</h4>
        <current-user>
          <template v-slot:default="slotProps">
            {{ slotProps.user.firstName }}
          </template>
        </current-user>

        <h4 class="mt-4">슬롯 속성 구조분해(Destructuring Slot Props)</h4>
        <!-- <current-user v-slot="{ user: person }">
          {{ person.firstName }}
        </current-user>
        <current-user v-slot="{ user = { firstName: 'Guest' } }">
          {{ user.firstName }}
        </current-user> -->
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
          <v-toolbar-title>
            <h3>이름이 있는 슬롯 디렉티브의 단축표기(Named Slots Shorthand)</h3>
          </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <base-layout>
          <template #header>
            <h1>Here might be a page title</h1>
          </template>

          <template>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
          </template>

          <template #footer>
            <p>Here's some contact info</p>               
          </template>
        </base-layout>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import navigationLink from '@/components/sample/navigation-link.vue'
import baseLayout from '@/components/sample/base-layout.vue'
import submitButton from '@/components/sample/submit-button.vue'
import currentUser from '@/components/sample/current-user.vue'
import currentUser2 from '@/components/sample/current-user2.vue'
export default {
    name: "VueComponents",
    data() {
        return {
          user: {
            name: 'jochangi',
            firstName: 'jo',
            lastName: 'changi'
          },
          userMsg: '컴포넌트로 보내는 데이터'
        }
    },
    components: {
      navigationLink, baseLayout, submitButton, currentUser, currentUser2
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