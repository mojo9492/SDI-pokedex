import React from 'react';

const PageDetails = (props) => {
    var arrTest = ['shoot fire','lightning blast','water blade'];
    if (!props.pageContents) {
        return (
            <div className='detailsContainer'>
                <div>
                    <h1>Details:</h1>
                    <div id='statsBox'>
                        <p>{props.stats}</p>
                    </div>
                    <div id='abilitiesContainer'>
                        {arrTest.map((ability, index) => {return (<div key={index} id='abilitiesBox'>{ability}</div>)})}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='detailsContainer'>
                <div>
                    <h1>Environment:</h1>
                    <p>{props.location}</p>
                </div>
            </div>
        );
    };
};

export default PageDetails;