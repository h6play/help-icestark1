import { isInIcestark, setLibraryName } from '@ice/stark-app';
import { createVue, destroyVue, setWebpackPublicPath } from '@/plugins/vue';

if (isInIcestark()) {
  setLibraryName(process.env.VUE_APP_FRONTEND);
  setWebpackPublicPath();
} else {
  createVue();
}

export function mount(props) {
  console.log('Login应用mount被调用');
  createVue(props);
}

export function unmount() {
  console.log('Login应用unmount被调用');
  destroyVue();
}
