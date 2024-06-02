import { useNuxtApp } from '#app';
export default defineNuxtRouteMiddleware(async (to, from) => {
  // const { $api } = useNuxtApp();
  const nuxtApp = useNuxtApp();

  try {
    const result = await nuxtApp.$api.user.getCurrentUser(
      {
        headers: useRequestHeaders(["cookie"])
      }
    );

    // User is authenticated
    if (result) {
      // If the user is trying to access the login or register page, redirect them to the home page
      if (to.name === 'login' || to.name === 'register') {
        // return navigateTo('/test');
        console.log(result)
      }
    } else {
      // User is not authenticated
      // If the user is trying to access a protected page, redirect them to the login page
      if (to.name !== 'login' && to.name !== 'register') {
        return navigateTo('/test');
      }
    }
  } catch (error) {
    // Redirect to login on error
    console.log(error)
    // if (process.client) {
    //   window.location.href = '/login';
    // } else {
    //   return navigateTo('/login');
    // }
  }
});
