import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends React.Component {

  renderItem = (info) => {
    return <ListItem library={info.item} />
  }

  render(){
    return(
      <FlatList 
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries
  }
}

export default connect(mapStateToProps)(LibraryList);