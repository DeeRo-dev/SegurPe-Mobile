import * as SecureStore from "expo-secure-store";

/**
 * Guarda un token de usuario en el almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se almacenará el token.
 * @param {string} tokenValue - El valor del token a guardar.
 */
async function saveUserToken(keyName, tokenValue) {
  await SecureStore.setItemAsync(keyName, tokenValue);
}

/**
 * Obtiene un token de usuario del almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenado el token.
 * @return {Promise<string>} El token de usuario obtenido del almacenamiento seguro.
 */
async function getUserToken(keyName) {
  const token = await SecureStore.getItemAsync(keyName);
  return token;
}

/**
 * Guarda la información del usuario en el almacenamiento seguro.
 * La información del usuario se guarda como un objeto JSON.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se almacenará la información del usuario.
 * @param {Object} userInfo - La información del usuario a guardar.
 */
async function saveUserInfo(keyName, userInfo) {
  const userInfoJSON = JSON.stringify(userInfo);
  await SecureStore.setItemAsync(keyName, userInfoJSON);
}

/**
 * Obtiene la información del usuario del almacenamiento seguro.
 * La información del usuario se lee como un objeto JSON.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenada la información del usuario.
 * @return {Promise<Object>} La información del usuario obtenida del almacenamiento seguro.
 */
async function getUserInfo(keyName) {
  const userInfoJSON = await SecureStore.getItemAsync(keyName);
  const userInfo = JSON.parse(userInfoJSON);
  return userInfo;
}

/**
 * Actualiza un token de usuario existente en el almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenado el token.
 * @param {string} tokenValue - El nuevo valor del token a guardar.
 */
async function updateUserToken(keyName, tokenValue) {
  await SecureStore.setItemAsync(keyName, tokenValue);
}

/**
 * Elimina un token de usuario del almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenado el token.
 */
async function deleteUserToken(keyName) {
  await SecureStore.deleteItemAsync(keyName);
}

/**
 * Actualiza la información del usuario en el almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenada la información del usuario.
 * @param {Object} userInfo - La información del usuario actualizada a guardar.
 */
async function updateUserInfo(keyName, userInfo) {
  console.log(keyName, userInfo, )
  const userInfoJSON = JSON.stringify(userInfo);
  await SecureStore.setItemAsync(keyName, userInfoJSON);
}

/**
 * Elimina la información del usuario del almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenada la información del usuario.
 */
async function deleteUserInfo(keyName) {
  await SecureStore.deleteItemAsync(keyName);
}

/**
 * Guarda la información del usuario en el almacenamiento seguro para no volver a mostrar el onboarding.
 * La información del usuario setea como un boolaen.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se almacenará la información del usuario.
 * @param {Boolean} isBoarding - El valor para saber si el usuario ya vio el onboarding.
 */

async function saveIsBoarding(keyName, isBoarding) {
  // const userInfoJSON = JSON.stringify(userInfo);
  await SecureStore.setItemAsync(keyName, isBoarding.toString());
}
/**
 * Obtiene isBoarding del usuario en el almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenado el token.
 *
 */
async function getIsBoarding(keyName) {
  const statusIsBoarding = await SecureStore.getItemAsync(keyName);
  if ( statusIsBoarding !== null) {
    const booleanValue = ( statusIsBoarding === 'true');
  if (booleanValue) {
    return true
  }
  } else {
    return false
  }
  
}
/**
 * Elimina la información de iSBOARDING del almacenamiento seguro.
 *
 * @param {string} keyName - El nombre de la clave bajo la cual se encuentra almacenada la información del usuario.
 */
 async function deleteIsBoarding(keyName) {
  await SecureStore.deleteItemAsync(keyName);
}

export {
  saveUserToken,
  getUserToken,
  updateUserToken,
  deleteUserToken,
  saveUserInfo,
  getUserInfo,
  updateUserInfo,
  deleteUserInfo,
  saveIsBoarding,
  getIsBoarding,
  deleteIsBoarding,
};
