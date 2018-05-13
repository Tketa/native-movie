import React from 'react';
import { StyleSheet, Text,
         View, ActivityIndicator,
         ListEmptyComponent } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MoviePost from './MoviePost';

export default class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props.screenProps;
    return (
      <FlatList
        data={props.posts}
        keyExtractor={(post) => post.id}
        refreshing={props.loading}
        onRefresh={props.loadMore}
        onEndReachedThreshold={0.05}
        onEndReached={props.loadMore}
        ListEmptyComponent={() =>
          <View>
            <ActivityIndicator size='large' />>
          </View>
        }
        renderItem={(postItem) => {
          const movie = postItem.item;
          const movieObject = {title: movie.title,
                overview: movie.overview,
                vote_average: movie.vote_average,
                poster_path: movie.poster_path,
                key: movie.id };
          return <MoviePost
                    movie={movieObject}
                    loadDetails={() => this.props.navigation.navigate('MoviePostDetails')} />
        }}
      />
    );
  }

}
