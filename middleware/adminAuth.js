import { useNuxtApp } from '#app';
export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  setTimeout(async () => {
    try {
      const result = await nuxtApp.$api.user.getCurrentUser(
        {
          headers: useRequestHeaders(["cookie"])
        }
      );
      console.log(result)
  
      // User is authenticated
      if (result.status === 'Login') {
        if (to.name === 'login') {
          console.log(result)
          return navigateTo('/');
        }
      } else {
        // User is not authenticated
        // If the user is trying to access a admin/trader page, redirect them to the login page
        if (to.name !== 'login')
          return navigateTo('/login');
      }
    } catch (error) {
      // Redirect to login on error
      console.log(error)
    }
  }, 0.1)
});
