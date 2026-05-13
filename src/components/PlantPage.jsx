import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, searchQuery, onSearch }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchQuery={searchQuery} onSearch={onSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
