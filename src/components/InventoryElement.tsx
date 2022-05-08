import { View, Text, Image, StyleSheet } from "react-native";
import { memo } from "react";

import { InventoryItem } from "../navigation/types";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export const InventoryElement = memo(({ item, index }: { item: InventoryItem; index: number }) => {
  return (
    <View style={[styles.container, { marginRight: index % 2 === 0 ? 20 : 0 }]}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.value}>€{item.value}</Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    height: 265,
    flex: 0.5,
    backgroundColor: colors.mainWhite,
    marginBottom: 20,
    borderRadius: 14,
    overflow: 'hidden',
  },
  image: {
    height: 158,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 19,
    lineHeight: 26,
    color: colors.mainBlack,
  },
  value: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 20,
    color: colors.gray700,
  }
})