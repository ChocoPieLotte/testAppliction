import { Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native"

import { ImagePicker } from "../sdk/ImagePicker";
import { colors } from "../theme/colors";

export const PhotoPicker = (props: { onImage: (uri: string) => void; photoUri?: string }) => {
  const getImageFromCamera = () => {
    ImagePicker.takePhoto().then(res => {
      if (!res?.cancelled && res?.uri) {
        props.onImage(res.uri);
      }
    }).catch()
  }
  const getImageFromGallery = () => {
    ImagePicker.pickImage().then(res => {
      if (!res?.cancelled && res?.uri) {
        props.onImage(res.uri);
      }
    }).catch()
  }
  const showAlert = () => {
    Alert.alert(
      "Photo Picker",
      undefined,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Gallery",
          onPress: getImageFromGallery,
        },
        {
          text: "Camera",
          onPress: getImageFromCamera,
        },
      ],
    );
  }
  return (
    <TouchableOpacity onPress={showAlert} style={styles.container}>
      {props.photoUri ? <Image style={styles.image} source={{ uri: props.photoUri }} /> : <Text>Add photo</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
  container: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  }
 })