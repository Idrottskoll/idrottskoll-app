import React from 'react';
import { connect } from 'react-redux';

// TODO: Add checks for if user is auth
// this component acts like a service layer and will always check for if the user is
// signed in
export default function(ComposedComponent) {
    class Authtentication extends React.Component {
        static contextType = {};
    }
}
