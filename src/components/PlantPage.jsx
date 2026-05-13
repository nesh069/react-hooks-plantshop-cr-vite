import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchQuery={searchQuery} onSearch={onSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
