import React from 'react';
import { useParams, Link } from 'react-router';

import { gamesData } from '../utils/SaleGameData';

const PropertyDetail = () => {

    const { id } = useParams();

    const property = gamesData.find((data) => {
        return data.id === parseInt(id);
    })

    return (
        <section>

        </section>
    );
};

export default PropertyDetail;