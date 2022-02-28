<template>
  <div>
    <h1>当前是Main应用</h1>
    <p><el-button @click="a1()">跳转Login应用 window.location.href 方式</el-button></p>
    <p><el-button @click="a2()">跳转Login应用 @ice/stark-app.appHistory.push() 方式</el-button></p>
  </div>
</template>

<script>
import { appHistory } from '@ice/stark-app';

export default {
  methods: {
    a1() {
      window.location.href = '/';
    },
    a2() {
      appHistory.push('/');
    }
  }
};
</script>
