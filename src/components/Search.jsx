import { useCityStore } from "@/store/cityStore";

export default function Search() { 
    const setCity = useCityStore(state => state.setCity);
    
    //TODO cargar las ciudades usando la api de aemet
    return (
        <select defaultValue="" name="citySelect" className="bg-white-800 p-2 rounded-lg" onChange={e => setCity(e.target.value)}>
            <option value = "">Seleccione una ciudad</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
        </select>
    )
}