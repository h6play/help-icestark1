<template>
  <div id="MainContainer">
    <!-- 应用内容 -->
    <div id="NodeContainer"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from '@ice/stark';

export default {
  data() {
    return {
      gobar: {
        visible: false,
      },
    };
  },
  mounted() {
    let container = document.querySelector('#NodeContainer');
    registerMicroApps([
      {
        name: 'login',
        title: '登录授权',
        activePath: '/login',
        // exact: true,
        container,
        url: [
          'http://localhost:8081/css/app.css',
          'http://localhost:8081/js/app.js',
        ],
      },
      {
        name: 'main',
        title: '云平台',
        activePath: '/main',
        container,
        url: [
          'http://localhost:8082/css/app.css',
          'http://localhost:8082/js/app.js',
        ],
      },
    ]);
    start();
    console.log('Master入口创建');
  },
};
</script>
