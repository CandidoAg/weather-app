import { useCityStore } from '@/store/cityStore'
import { useEffect, useRef, useState } from "react"


export default function Card() {
  const city = useCityStore(state => state.city);

  //TODO mostrate la informacion usando la api de aemet
  return (
    <div className="px-5 py-5 rounded-lg border shadow-md place-content-center align-middle
    bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 
    transition-all duration-200">
      <h2 className="text-3xl text-white font-semibold">Informacion para la ciudad {city}</h2>
    </div>
  )
}

