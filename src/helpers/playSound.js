import { Audio } from "expo-av";

const playSound = async () => {
  const soundObject = new Audio.Sound();

  try {
    // Reemplaza "your_audio_file.mp3" con el nombre de tu archivo de audio.
    const source = require("../assets/sirena_policia.mp3");

    // Carga y reproduce el archivo de audio.
    await soundObject.loadAsync(source);
    await soundObject.playAsync();

    // Cuando el audio termina de reproducirse, libera los recursos.
    soundObject.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        soundObject.unloadAsync();
      }
    });
  } catch (error) {
    console.log("Error al reproducir el sonido", error);
  }
};

export default playSound;
