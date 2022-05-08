import { View, Text, StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export const MainTextInput = (props: TextInputProps & { title: string; rightSymbol?: string; large?: boolean }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={colors.mainGrey}
          style={[styles.mainInput, props.large && styles.large]}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          value={props.value}
          multiline={props.large}
          keyboardType={props.keyboardType}
        />
        {props.rightSymbol && <Text style={styles.rightIcon}>{props.rightSymbol}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 17,
    color: colors.mainBlack,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    position: 'absolute',
    right: 15,
    fontSize: 17,
    lineHeight: 24,
    color: colors.gray700,
  },
  mainInput: {
    width: '100%',
    height: 48,
    backgroundColor: colors.gray100,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 24,
    color: colors.gray1000,
    marginTop: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.gray100,
    paddingRight: 27,
  },
  large: {
    minHeight: 128,
  }
})