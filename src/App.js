import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeItem, buyItem } from './actions/Actions';

// const removeFeature = item => {
//   // dispatch an action here to remove an item
//   return {
//     type: "REMOVE_ITEM",
//     payload: item
//   };
// };

// const buyItem = item => {
//   // dispatch an action here to add an item
//   return {
//     type: "BUY_ITEM",
//     payload: item
//   };  
// };

const App = (props) => {
  console.log(props);
  const { state, removeItem, buyItem } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, null)(App);

