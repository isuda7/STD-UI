<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">Slot</h2>
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
        <br>
        <br>
        <div>
          [Page]
          <br>
          <code>&lt;navigation-link url="/profile">
  Your Profile
&lt;/navigation-link></code>
          <br><br>
          [Component]<br>
          <code>&lt;a :href="url" class="nav-link">
  &lt;slot>&lt;/slot>
&lt;/a></code>
          <br><br>
          [Render]<br>
          <code>&lt;a class="nav-link" url="/profile">
  Your Profile
&lt;/a></code>
        </div>
        <br>
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
        <br>
        <br>
        <div>
          [Data]
          <br>
          <code>data() {
    return {
      user: {
        name: 'jochangi',
      },
    }
},</code>
          <br>
          <br>
          [Page]
          <br>
          <code>&lt;navigation-link url="/profile">
  Logged in as { user.name }
&lt;/navigation-link></code>
          <br><br>
          [Component]<br>
          <code>&lt;a :href="url" class="nav-link">
  &lt;slot>&lt;/slot>
&lt;/a></code>
          <br><br>
          [Render]<br>
          <code>&lt;a class="nav-link" url="/profile">
  Logged in as jochangi
&lt;/a></code>
        </div>
        <br>

        <p>
          부모 템플릿 안에 있는 것들은 부모 컴포넌트의 범위에 컴파일되고,<br>
          자식 템플릿 안에 있는 것들은 자식 컴포넌트의 범위에 컴파일됩니다.
        </p>
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
        <br>
        <br>
        <div>
          [Page]<br>
          <code>&lt;submit-button>Button&lt;/submit-button></code>
          <br>
          <br>
          [Component]<br>
          <code>&lt;button type="submit">&lt;slot>Submit&lt;slot>&lt;/button></code>
          <br>
          <br>
          [Render]<br>
          <code>&lt;button type="submit">Button&lt;/button></code>
        </div>
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
          [Page]<br>
          <code>&lt;base-layout>
  &lt;template v-slot:header>
    &lt;h1>Here might be a page title&lt;/h1>
  &lt;/template>

  &lt;p>A paragraph for the main content.&lt;/p>
  &lt;p>And another one.&lt;/p>

  &lt;template v-slot:footer>
    &lt;p>Here's some contact info&lt;/p>               
  &lt;/template>
&lt;/base-layout></code>
          <br>
          <br>
          [Component]<br>
          <code>&lt;div class="container">
  &lt;header>
    &lt;slot name="header">&lt;/slot>
  &lt;/header>
  &lt;main>
    &lt;slot>&lt;/slot>
  &lt;/main>
  &lt;footer>
    &lt;slot name="footer">&lt;/slot>
  &lt;/footer>
&lt;/div></code>
          <br>
          <br>
          [Render]<br>
          <code>&lt;div class="container">
  &lt;header>
    &lt;h1>Here might be a page title&lt;/h1>
  &lt;/header>
  &lt;main>
    &lt;p>A paragraph for the main content.&lt;/p>
    &lt;p>And another one.&lt;/p>
  &lt;/main>
  &lt;footer>
    &lt;p>Here's some contact info&lt;/p>
  &lt;/footer>
&lt;/div></code>
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