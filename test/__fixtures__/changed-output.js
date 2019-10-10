function A() {
  return <View>
    <View>
      {[1, 2, 3, 4].map(item => {
        return <View>item</View>;
      })}
    </View>
  </View>;
}