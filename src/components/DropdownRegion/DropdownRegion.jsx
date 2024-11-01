import { useState } from "react"

export function DropdownRegion() {
    const [selectedRegion, setSelectedRegion] = useState('region1')
    const handleRegion = (event) => {
        setSelectedRegion(event.target.value);
    };

  return (
    <select value={selectedRegion} onChange={handleRegion}>
        <option value={'region1'} id="">Europa</option>
        <option value={'region2'} id="">South America</option>
    </select>
  )
}
