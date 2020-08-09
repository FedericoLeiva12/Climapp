import React from 'react';
import Error from '../error';
import { connect } from 'react-redux';
import { hideError } from '../../store/actions';

function ErrorContainer({error, errorMessage, hideError}) {
    return (
        <div>
            {error?
                !hideError?
                    <Error
                        error={error}
                        errorMessage={errorMessage}
                        hideError={hideError} />:
                    (function(){
                        hideError();
                        return ''
                    })()
                :''}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.error,
        errorMessage: state.errorMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        hideError: () => dispatch(hideError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);