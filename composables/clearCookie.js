// composables/useClearCookie.js
import { useFetch } from '#app';

export function useClearCookie() {
  const clearCookie = async () => {
    try {
      const { data, error } = await useFetch('/api/clear-cookie');
      if (error) {
        // console.error('Error clearing cookie:', error);
      } else {
        console.log(data.value.message);
      }
    } catch (error) {
    //   console.error('Error clearing cookie:', error);
    }
  };

  return { clearCookie };
}
