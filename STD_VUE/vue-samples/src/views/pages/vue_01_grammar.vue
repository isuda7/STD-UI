<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">문법</h2>
    </div>

    <!-- s: 보간법 -->
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>보간법</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>문자열</h4>
        <ul>
          <li>메세지 : {{ message }}</li>
        </ul>

        <h4 class="mt-4">원시 HTML</h4>
        <ul>
          <li>String : {{ htmlCode }}</li>
          <li>
            v-html :
            <span v-html="htmlCode"></span>
          </li>
        </ul>

        <h4 class="mt-4">속성</h4>
        <ul>
          <li>
            v-bind:property
            <span v-bind:id="propertyID"></span>
          </li>
          <li>
            :property
            <span v-bind:id="propertyID"></span>
          </li>
          <li>
            :disabled (값이 true가 아닌경우 적용하지 않는다.)
            <button
              type="button"
              v-bind:disabled="isButtonDisabled"
            >Button</button>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: 보간법 -->

    <!-- s: 디렉티브 -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>디렉티브</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>전달인자</h4>
        <ul>
          <li>
            <a v-bind:href="url" target="_blank">디렉티브 URL</a>
          </li>
          <li>
            <button type="button" v-on:click="eventURL">디렉티브 Event</button>
          </li>
        </ul>

        <h4 class="mt-4">수식어</h4>
        <ul>
          <li>수식어는 점으로 표시되는 특수 접미사로, 디렉티브를 특별한 방법으로 바인딩 해야 함을 나타냅니다. 예를 들어, .prevent 수식어는 트리거된 이벤트에서 event.preventDefault()를 호출하도록 v-on 디렉티브에게 알려줍니다.</li>
          <li>
            <code>&lt;form v-on:submit.prevent="onSubmit"&gt;...&lt;/form&gt;</code>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: 디렉티브 -->

    <!-- s: 약어 -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>약어</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>v-bind</h4>
        <ul>
          <li>
            전체:
            <code>&lt;a v-bind:href="url"&gt;&lt;/a&gt;</code>
          </li>
          <li>
            약어:
            <code>&lt;a :href="url"&gt;&lt;/a&gt;</code>
          </li>
        </ul>

        <h4 class="mt-4">v-on</h4>
        <ul>
          <li>
            전체:
            <code>&lt;a v-on:click="eventURL"&gt;&lt;/a&gt;</code>
          </li>
          <li>
            약어:
            <code>&lt;a @click="eventURL"&gt;&lt;/a&gt;</code>
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: 약어 -->

    <!-- s: computed -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>computed 속성</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>정의</h4>
        <ul>
          <li>탬플릿 내에 표현식은 간단한 연산일 때 이용하며, 이 외에 복잡한 연산일때 사용합니다.</li>
        </ul>

        <h4 class="mt-4">예시</h4>
        <ul>
          <li>
            원본메세지: "{{ message }}"
            <br>
            역순으로 표시한 메시지: "{{ reversedMessage }}"
          </li>
        </ul>

        <h4 class="mt-4">설명</h4>
        <ul>
          <li>
            1. computed에서 함수를 만들고 연산처리 한 것을 return으로 되돌린다.
            <br>2. 보간법으로 문자열처럼 함수명을 가져온다.
            <br>3. 표현식에서 메소드를 호출할 수도 있다. 예: reversedMessage() 
          </li>
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: computed -->

    <!-- s: watch -->
    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>watch 속성</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>정의</h4>
        <ul>
          <li>Vue는 watch 옵션을 통해 데이터 변경에 반응하는 보다 일반적인 방법을 제공합니다.<br>이는 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용합니다.</li>
          <!-- <li>예제
            <div id="watchExample">
              <p>
                Yes/No 질문을 들어보세요: 
                <input type="text" v-model="qusetion">
              </p>
              <p>
                {{ answer }}
              </p>
            </div>
          </li> -->
        </ul>
      </v-sheet>
    </v-card>
    <!-- e: watch -->
  </div>
</template>

<script>
export default {
  name: "VueGrammar",
  data() {
    return {
      // 보간법
      message: "메세지를 표시합니다.",
      htmlCode: '<span style="color:red">This is color Red.</span>',
      propertyID: "propertyID",
      isButtonDisabled: true,

      // 디렉티브
      url: "http://www.naver.com",

      //watch
      qusetion: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    };
  },
  created() {},
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    qusetion: function(newQuesition){
      this.answer = '입력을 기다리는 중...'
      this.getAnswer()
    }
  },
  computed: {
    //역순으로 표시
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    eventURL: function() {
      alert("디렉티브 Event 버튼을 클릭하였습니다.");
    },
    getAnswer: function() {
      if (this.qusetion.indexOf('?') === -1) {
        this.answer = '질문에는 일반적으로 물음표가 포함 됩니다.'
        return
      }
      this.answer = '생각중...'
      var vm = this
      axios.get('httpsL//yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capialize(response.data.answer)
        })
        .catch(function(){
          vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
        })
    }
  },
  mounted() {}
};
</script>