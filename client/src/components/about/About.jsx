import React from 'react';

const AboutPage = () => {

    const copyRightYear = new Date().getFullYear()

    return (
        <div className='about-container'>

        <div className='about-body'>
            <p>
                This app was created for the kids who loved showing off their binders full of pokemon cards
            </p>
        </div>
        <footer className='about-footer'>
            boberJober Labs {copyRightYear}
        </footer>
        </div>
    )
}

export default AboutPage;