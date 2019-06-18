import React from 'react';

export default Component => {
    const Page = () => {
        return (
            <div>
                <Component />
            </div>
        );
    };

    Page.propTypes = {};

    return Page;
};
