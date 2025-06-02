<template>
  <l-map :zoom="6" :center="[28.6, 77.2]" style="height: 500px;">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <l-marker v-for="c in chargers" :key="c._id" :lat-lng="[c.latitude, c.longitude]">
      <l-popup>
        <strong>{{ c.name }}</strong><br />
        Power: {{ c.powerOutput }}kW<br />
        Status: {{ c.status }}
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script setup>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  chargers: Array
})
</script>
