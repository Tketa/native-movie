import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MovieList from './components/MovieList'
import  { createStackNavigator }  from 'react-navigation';
import MoviePostDetails from './components/MoviePostDetails'

const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key`;
const apiKey = `8237b2eb1c4e5ddc3156da0988afdec2`

const Routes = createStackNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      title: 'Welcome to Movie List'
    }
  },
  MoviePostDetails: {
    screen: MoviePostDetails
  },
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      page: 1,
    };
    this.fetchWithPage = this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  async componentDidMount() {
    this.setState({loading: true,});
    this.fetchWithPage(1);
  }

  async loadMore() {
    const newPage = this.state.page + 1
    await this.fetchWithPage(newPage);
    this.setState({ page: newPage });
  }

  async fetchWithPage(pageNumber) {
    const url = `${apiUrl}=${apiKey}&page=${pageNumber}`;
    console.log("AppAppApp");
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      posts: this.state.posts.concat(data.results),
      loading: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Routes
          screenProps={{
            posts: this.state.posts,
            loadMore: this.loadMore,
            loading: this.state.loading
          }} />
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
