import React from 'react';
import { StyleSheet, Text,
         View, Image, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const imagePrefix = `https://image.tmdb.org/t/p/w342/`

export default class MoviePost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movie
    const img = { uri: `${imagePrefix}${movie.poster_path}` };
    return (
      <TouchableHighlight onPress={this.props.loadDetails}>
        <View style={styles.container}>
          <Image className='image'
            style={styles.image}
            source={img} />
          <Text style={styles.title}>
            {movie.title} ({movie.vote_average})
          </Text>
          <Text style={styles.overview}>
            {movie.overview}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 400,
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 10,
  },
  overview: {
    paddingTop: 10,
  }
});
