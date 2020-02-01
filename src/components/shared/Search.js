import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const initialState = { isLoading: false, results: [], value: '' }

class SearchComponent extends Component {
  state = initialState
  
  resultRenderer = (user) => {
    return(
      <a href={`/user/${user.userId}`}><Label content={user.name} /></a>
    )
  }


  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)
      let searchResult = _.filter(this.props.users, isMatch)

      this.setState({
        isLoading: false,
        results: searchResult
      })
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
      users: state.users
  }
}

export default connect(mapStateToProps)(SearchComponent);