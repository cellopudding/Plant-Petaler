import React, { useState, useEffect } from 'react';

const PlantComponents = () => {
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    axios.get('https://perenual.com/api/species-list?page=1&key=sk-bjsu645066e2a29ee716', {
      params: {
        Key: 'sk-bjsu645066e2a29ee716'
      }
    }).then(response => {
      setPlantData(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      {plantData && (
        <div>
          <h2>{plantData.common_name}</h2>
        </div>
      )}
    </div>
  );
};

export default PlantComponents;