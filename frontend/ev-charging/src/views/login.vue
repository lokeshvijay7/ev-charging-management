<template>
  <div class="login" style="max-width: 400px; margin: 2rem auto; padding: 2rem; border: 1px solid #ccc; border-radius: 8px;">
    <h2 style="text-align: center; margin-bottom: 1.5rem;">Login</h2>
    <form @submit.prevent="handleLogin" style="display: flex; flex-direction: column; gap: 1rem;">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
      />
      <button type="submit" style="margin-top: 1rem; padding: 0.5rem; background-color: #1976d2; color: white; border: none; border-radius: 4px;">
        Login
      </button>
    </form>
    <p v-if="error" style="color: red; margin-top: 1rem; text-align: center;">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value)
    router.push('/chargers')
  } catch (err) {
    error.value = 'Invalid email or password'
  }
}
</script>
