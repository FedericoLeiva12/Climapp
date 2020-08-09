import React from 'react';
import { connect } from 'react-redux';
import Cards from '../components/cards';

function Home({cities}) {
    return (
        <div>
            <Cards />
        </div>
    )
}

export default Home