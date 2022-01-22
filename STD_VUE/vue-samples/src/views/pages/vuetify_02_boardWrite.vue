<template>
  <div class="card-wrap">
    <div class="card-headline">
      <h2 class="mb-5 display-1">게시판 등록</h2>
    </div>
    <div class="card-body">
      <v-layout row>
        <v-flex xs2>
          <v-subheader>제목</v-subheader>
        </v-flex>
        <v-flex sm4>
          <v-text-field single-line></v-text-field>
        </v-flex>
        <v-flex sm2>
          <v-subheader>아이디</v-subheader>
        </v-flex>
        <v-flex sm4>
          <v-text-field single-line></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex sm2>
          <v-subheader>비밀번호</v-subheader>
        </v-flex>
        <v-flex sm4>
          <v-text-field
            v-model="password"
            single-line
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
          ></v-text-field>
        </v-flex>
        <v-flex sm2>
          <v-subheader>비밀번호 확인</v-subheader>
        </v-flex>
        <v-flex sm4>
          <v-text-field v-model="password" single-line></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex sm2>
          <v-subheader>주소</v-subheader>
        </v-flex>
        <v-flex sm10>
          <v-layout>
            <v-flex sm12>
              <v-text-field
                v-model="text"
                single-line
                @click=""
              ></v-text-field>
            </v-flex>
            <v-flex sm2>
              <v-btn>우편번호</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
export default {
  name: "VuetifyBoardWrite",
  data() {
    return {
      rules: {
        password: 'Password',
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
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