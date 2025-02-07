  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const instruments = ref([])

async function getInstruments() {
  try {
    const { data, error } = await supabase.from('instruments').select()
    if (error) throw error
    console.log("Fetched instruments:", data) // Debugging log
    instruments.value = data
  } catch (err) {
    console.error("Error fetching instruments:", err.message)
  }
}


  onMounted(() => {
    getInstruments()
  })
  </script>

<template>
  <h1> Testing </h1>
    <ul>
      <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
    </ul>
  <h1>Food</h1>
  <personal-profile/> <br>
  <food-item/> <br>
  <food-item2/> <br>
  <food-item/> <br>
  <food-item2/> <br>
</template>


<style> </style>
