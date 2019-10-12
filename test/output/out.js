function b() {
  console.log(1);
}

function A() {
  return <View onClick={b}>
            <View>
                {[1, 2, 3, 4].map(item => {
        return <View>item</View>;
      })}
            </View>
        </View>;
}