import React, { useEffect } from 'react';
import Error from '../error';
import { connect } from 'react-redux';
import { hideError } from '../../store/actions';

function ErrorContainer({error, errorMessage, hideError, showError}) {
    useEffect(() => {
        if(error && showError) hideError();
    });

    return (
        <div>
            {error?
                <Error
                        error={error}
                        errorMessage={errorMessage}
                        hideError={hideError} />
                :''}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.error,
        errorMessage: state.errorMessage,
        showError: state.hideError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideError: () => dispatch(hideError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);