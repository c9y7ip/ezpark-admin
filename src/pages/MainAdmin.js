import React from 'react';

const MainPage = () => {
    return (
        <section>
            <h2>Main Admin Page</h2>
            <section><h4>Welcome , Admin !</h4></section>
            <section className='mainPageBut'>
                <button>Create New Parking Lot</button>
                <button>Edit Parking Lot</button>
                <button>View All Parking Lot</button>
            </section>
        </section>
    );
};


export default MainPage;