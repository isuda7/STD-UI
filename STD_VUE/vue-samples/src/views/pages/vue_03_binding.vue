<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">바인딩</h2>
    </div>

    <!-- s: HTML 클래스 바인딩하기 -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>HTML 클래스 바인딩하기</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>객체구문</h4>
        <ul>
          <li>
            <code>v-bind:class="{ active: isActive }"</code>
            <br>위 구문은
            <code>active</code> 클래스의 존재 여부가 데이터 속성
            <code>isActive</code> 의 참 속성에 의해 결정되는 것을 의미합니다.
            <div v-bind:class="{ active: isActive }"></div>
          </li>
          <li class="mt-3">
            <code>class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"</code>
            <br>
            <code>v-bind:class</code> 디렉티브는 일반
            <code>class</code> 속성과 공존할 수 있습니다.
            <br>
            <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
          </li>
          <li class="mt-3">
            바인딩 된 객체는 인라인 일 필요는 없습니다.
            <br>
            <span v-bind:class="classObject"></span>
            <span v-bind:class="classObject2"></span>
          </li>
        </ul>

        <h4 class="mt-4">배열구문</h4>
        <ul>
          <li>
            <code>v-bind:class="[activeClass, errorClass]"</code>
            <br>위 구문은
            <code>activeClass</code>와
            <code>errorClass</code>의 값을 적용한다.
            <div v-bind:class="[activeClass, errorClass]"></div>
          </li>
          <li class="mt-3">
            <code>v-bind:class="[isActive ? activeClass : staticClass, errorClass]"</code>
            <br>위 구문은
            <code>isActive ? 참 : 거짓, errorClass</code> 값을 적용한다.
            <div v-bind:class="[isActive ? activeClass : staticClass, errorClass]"></div>
          </li>
        </ul>

        <h4 class="mt-4">컴포넌트와 함께 사용하는 방법</h4>
        <ul>
          <li>
            속성 및 문법이 컴포넌트와 무관하므로 위 방법과 동일함.
            <my-component v-bind:class="{ active: isActive }"></my-component>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: HTML 클래스 바인딩하기 -->

    <!-- s: 인라인 스타일 바인딩 -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>인라인 스타일 바인딩</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>객체구문</h4>
        <ul>
          <li>
            <code>v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"</code>
            <div
              v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
            >인라인스타일 예시텍스트 (데이터 개별호출)</div>
          </li>
          <li class="mt-3">
            <code>v-bind:style="styleObject"</code>
            <div v-bind:style="styleObject">인라인스타일 예시텍스트 (데이터 오브젝트호출)</div>
          </li>
        </ul>

        <h4 class="mt-4">자동 접두사</h4>
        <ul>
          <li>
            <div v-bind:style="{transform: transForms}">인라인스타일 예시텍스트</div>
          </li>
        </ul>

        <h4 class="mt-4">다중 값 제공</h4>
        <ul>
          <li>
            <code>v-bind:style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}</code> <br>
            브라우저가 지원하는 배열의 마지막 값만 렌더링합니다.
            <div v-bind:style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}">인라인스타일 예시텍스트</div>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: 인라인 스타일 바인딩 -->
  </div>
</template>
<script>
import myComponent from "@/components/sample/my-component.vue";
export default {
  name: "VueBinding",
  data() {
    return {
      isActive: true,
      hasError: true,
      error: null,
      classObject: {
        active: true,
        "text-danger": true
      },
      activeClass: "active",
      staticClass: "static",
      errorClass: "text-danger",

      activeColor: "blue",
      fontSize: 16,
      styleObject: {
        color: "red",
        fontSize: "15px"
      },

      baseStyles: "green",
      overridingStyles: "blue",

      transForms: "translate(0, 0)",
    };
  },
  components: {
    myComponent
  },
  created() {},
  watch: {},
  computed: {
    classObject2: function() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    }
  },
  methods: {},
  mounted() {}
};
</script>