import { useEffect, useState } from "react";
import falacias from "../../assets/falacias.json";
const Falacias = () => {
  // const [falacyType, setFalacyType] = useState("");
  const [falacySample, setFalacySample] = useState();

  useEffect(() => {
    chooseRandomFalacy();
  }, []);

  const chooseRandomFalacy = () => {
    // Aquí seleccionamos una falacia aleaotiramente y modificamos con ella el estado falacy
    let randomFalacia = falacias[Math.floor(Math.random() * falacias.length)];
    let randomSample =
      randomFalacia.samples[
        Math.floor(Math.random() * randomFalacia.samples.length)
      ];

    setFalacySample(randomSample);
  };

  return (
    <div>
      <p></p>
      {falacySample}
    </div>
  );
};

export default Falacias;
