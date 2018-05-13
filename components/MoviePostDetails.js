import React from 'react';
import { StyleSheet, Text,
         View, Image,
         TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';

export default class MoviePostDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const props = this.props.navigation.state.params;
    //I can't get the data out.
    return (
      <View style={styles.container}>
        <Text>Post Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
