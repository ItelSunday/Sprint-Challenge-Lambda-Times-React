import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    console.log(props.tab)
    return (
    <div
    //   className={''}
    //   onClick={() => {
    //     /* Replace this dummy click handler function with your selectTabHandler function from props 
    //      you'll need to pass the `tab` in as an argument to this handler. */
    //   }}
      className = {(props.tab === props.selectedTab) ? 'tab active-tab' : 'tab'}
      onClick = {(e) => props.selectedTabHandler(e, props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTabHandler: PropTypes.func,
  selectTab: PropTypes.string,
}
export default Tab;
