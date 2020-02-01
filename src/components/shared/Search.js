import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchAll } from "../../actions/search";

const initialState = { isLoading: false, results: [], value: '' }

class SearchComponent extends Component {
  state = initialState

  resultRenderer = (searchResult) => {
    if (searchResult.type == 'user')
      return (
        <a href={`/user/${searchResult.userId}`}><Label content={searchResult.name} /></a>
      )
    else if (searchResult.type == 'organization') 
    return (
      <a href={`/organization/${searchResult.org_id}`}><Label content={searchResult.name + ' (org)'} /></a>
    )
      
  }

  componentWillReceiveProps(newProps) {
    if (newProps.searchResults) {
      this.setState({
        isLoading: false,
        results: newProps.searchResults
      })
    }
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      let { searchAll } = this.props
      searchAll(this.state.value)
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            resultRenderer={this.resultRenderer}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = {
  searchAll
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);