<template>
  <footer class="bg-black text-white text-center p-5" style="height: 103px;" >
    <div class="max-w-7xl m-auto flex flex-col items-center">
      <div class="footer-links flex">
        <router-link :to="data.link" v-for="data in footerData" :key="data.footerData"
          class="text-xs font-normal hover:text-green-500">
          {{ data.name }}
        </router-link>
      </div>
      <div class="text-xs font-normal mb-2.5">
        本站所有直播均来自互联网，本站不从事任何经营业务，仅为休育爱好者提供免费赛事直播，如果侵犯了您的权益，请联系我们.
      </div>
      <div class="text-xs font-normal">
        Copyright © 2021 All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: [
        { name: '用户服务', link: "" },
        { name: '协议隐私政策', link: "" },
        { name: '免责声明', link: "" },
        { name: '权限详情', link: "" },
        { name: '联系我们', link: "" },
      ]
    }
  }
}
</script>

<style>
.footer-links {
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
</style>
