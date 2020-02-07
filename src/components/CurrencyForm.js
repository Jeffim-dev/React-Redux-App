import React from 'react';
import { connect } from 'react-redux';

import { fetchActivity } from '../actions';

const CurrencyForm = props => {
  return (
    <>
      <button onClick={ props.fetchActivity }>Get Rate</button>
      <div>
        {props.error &&<p>{props.error}</p>
        <h4>CAN:{props.currency.CAD}</h4>}
      </div>

    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    currency: state.currency
  }
}
export default connect(
  mapStateToProps,
  { fetchActivity }  
)(CurrencyForm);