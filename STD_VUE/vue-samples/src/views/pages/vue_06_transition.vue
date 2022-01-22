<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">트랜지션</h2>
    </div>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>단일 엘리먼트 / 컴포넌트 트랜지션</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <h4>트랜지션 클래스</h4>
        <ul>
          <li>v-enter: enter의 시작 상태.</li>
          <li>v-enter-active: enter에 대한 활성 및 종료 상태.</li>
          <li>v-enter-to: 진입 상태의 끝에서 실행됩니다.</li>
          <li>v-leave: leave를 위한 시작 상태.</li>
          <li>v-leave-active: leave에 대한 활성 및 종료 상태.</li>
          <li>v-leave-to: 2.1.8 이상 버전에서 지원합니다.</li>
        </ul>
        <p>
          <img
            src="https://kr.vuejs.org/images/transition.png"
            alt
            style="width:100%; max-width:600px;"
          />
          <br />
          <code>transition name="my-transition"</code>을 사용하면
          <code>v-enter</code> 클래스는
          <code>my-transition-enter</code> 가 됩니다.
        </p>

        <h4 class="mt-4">CSS Transition</h4>
        <button v-on:click="show = !show">Toggle</button>
        <transition name="fade">
          <p v-if="show">Hello</p>
        </transition>
        <button @click="slide = !slide">Toggle render</button>
        <transition name="slide-fade">
          <p v-if="slide">Hello</p>
        </transition>

        <h4 class="mt-4">CSS Animation</h4>
        <button @click="animate = !animate">Toggle Show</button>
        <transition name="bounce">
          <p v-if="animate">Lorem ipsum dolor sit amet, consectetur adipis</p>
        </transition>

        <h4 class="mt-4">사용자 지정 트랜지션 클래스</h4>
        <link
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
          rel="stylesheet"
          type="text/css"
        />
        <button @click="render = !render">Toggle render</button>
        <transition
          :duration="{ enter: 500, leave: 800 }"
          name="custom-classes-transtion"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        >
          <p v-if="render">Hello</p>
        </transition>

        <h4 class="mt-4">명시적-트랜지션-지속-시간</h4>
        <code>&lt;transition :duration="1000"&gt;...&lt;/transition&gt;</code>
        <br />
        <code>&lt;transition :duration="{ enter: 500, leave: 800 }"&gt;...&lt;/transition&gt;</code>

        <h4 class="mt-4">JavaScript 훅</h4>
        <!-- 
          <button @click="hock = !hock">Toggle Button</button>
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
          >...</transition>

          beforeEnter: function(el) {},
          enter: function(el, done) {},
          afterEnter: function(el) {},
          enterCancelled: function(el) {},
          beforeLeave: function(el) {},
          leave: function(el) {},
          afterLeave: function(el) {},
          leaveCancelled: function(el) {}

        -->
        <button @click="hock = !hock">Toggle</button>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          v-bind:css="false"
        >
          <p v-if="hock">Demo</p>
        </transition>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>최초 렌더링 시 트랜지션</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        노드의 초기 렌더에 트랜지션을 적용하고 싶다면 appear 속성을 추가 할 수 있습니다.
        <br />
        <code>transition appear</code>
      </v-sheet>
    </v-card>

    <v-card class="mt-5">
      <v-toolbar flat>
        <v-toolbar-title>
          <h3>엘리먼트 간 트랜지션</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-sheet class="pa-3">
        <transition>
          <button v-if="isEditing" key="On">On</button>
          <button v-else key="Off">Off</button>
        </transition>
        <br />
        <transition name="fade" mode="out-in">
          <button v-bind:key="isEditing" @click="isEditing = !isEditing">{{ isEditing ? 'On' : 'Off' }}</button>
        </transition>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "VueTransition",
  data() {
    return {
      show: true,
      slide: true,
      animate: true,
      render: true,
      hock: true,
      isEditing: false
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
    },
    afterEnter: function(el) {
      console.log("afterEnter");
    },
    enterCancelled: function(el) {
      console.log("enterCancelled");
    },
    beforeLeave: function(el) {
      console.log("beforeLeave");
    },
    leave: function(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
    },
    afterLeave: function(el) {
      console.log("afterLeave");
    },
    leaveCancelled: function(el) {
      console.log("leaveCancelled");
    }
  },
  mounted() {}
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>