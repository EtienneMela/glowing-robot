<template>
  <div class="">
    <div class="navbar-item">
      <div class="buttons">
        <!-- Check that the SDK client is not currently loading before accessing is methods -->
        <div v-if="!$auth.loading">
          <a
            v-if="!$auth.isAuthenticated"
            @click="login"
            class="button is-dark link-dark"
            ><strong>Sign in</strong></a
          >
          <a
            v-if="$auth.isAuthenticated"
            @click="logout"
            class="button is-dark link-dark"
            >Log out</a
          >
          <a
            v-if="$auth.isAuthenticated"
            class="is-size-3 has-background-dark link-dark"
          >
            | {{ $auth.user.name }}!</a
          >
          <img class="profile" :src="$auth.user.picture" alt="profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
.profile {
  margin-left: 5px;
  width: 40px;
  border-radius: 50%;
}

.button {
  cursor: pointer;
}
</style>