<template>
  <div class="chargers-container" style="max-width: 600px; margin: 2rem auto; padding: 1rem; border: 1px solid #ccc; border-radius: 8px;">
    <h2 style="text-align: center; margin-bottom: 1.5rem;">Chargers</h2>
    <div class="filters" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
      <input
        v-model="filters.status"
        placeholder="Status"
        style="flex: 1; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
      />
      <input
        v-model="filters.connectorType"
        placeholder="Connector"
        style="flex: 1; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;"
      />
      <button
        @click="fetchChargers"
        style="height: 40px; padding: 0 1rem; background-color: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Filter
      </button>
    </div>

    <ul class="charger-list" style="list-style: none; padding: 0;">
      <li
        v-for="charger in chargers"
        :key="charger._id"
        style="border-bottom: 1px solid #ddd; padding: 0.5rem 0;"
      >
        <strong>{{ charger.name }}</strong><br />
        Status: {{ charger.status }}<br />
        Power Output: {{ charger.powerOutput }} kW<br />
        Connector: {{ charger.connectorType }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const chargers = ref([])
const filters = ref({
  status: '',
  connectorType: ''
})
const auth = useAuthStore()

const fetchChargers = async () => {
  const query = new URLSearchParams(filters.value).toString()
  const res = await axios.get(`http://localhost:3000/api/chargers?${query}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  })
  chargers.value = res.data.chargers
}

fetchChargers()
</script>
