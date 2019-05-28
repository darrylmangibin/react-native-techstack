import React from 'react';
import { Text, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription = () => {
    if(this.props.expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1, padding: 15}}>{this.props.library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    return (
      <TouchableOpacity style={{padding: 20}} onPress={() => this.props.selectLibrary(this.props.library.id)}>
        <CardSection>
          <Text style={styles.titleStyle}>{this.props.library.title}</Text>
        </CardSection>
        {this.renderDescription()}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    selectedLibraryId: state.selectedLibraryId,
    expanded
  }
}

export default connect(mapStateToProps, actions)(ListItem);