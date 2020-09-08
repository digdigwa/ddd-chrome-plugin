<template>
  <div>
    <Recommend v-if="isLogin"/>
    <SignIn v-else @onLoginSuccess="onLoginSuccess"/>
  </div>
</template>

<script>
import SignIn from '../components/SignIn'
import Recommend from '../components/Recommend'
import { getLoginInfo } from '../common/login'
export default {
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    SignIn,
    Recommend
  },
  created () {
    const loginInfo = getLoginInfo()
    if (loginInfo.token && loginInfo.id) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  methods: {
    onLoginSuccess () {
      this.isLogin = true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
