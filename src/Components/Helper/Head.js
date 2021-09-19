import React from 'react'

const Head = (props) => {


    React.useEffect(() => {
        document.title = props.title + " | Squid Challenge";
    }, [props]);

    return <></>
};

export default Head
