import React from 'react'
import { View, Text } from 'react-native'

function RendezVous(customID) {
  async function load_data() {
    let { data: data, error } = await supabase.from("meezy").select("data")
    console.log(data, error)
  }
  
  return (
    <View>
      <Text>RDV</Text>
    </View>
  )
}

export default RendezVous



