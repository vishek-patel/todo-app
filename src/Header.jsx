import React from 'react'
import PropTypes from 'prop-types'

export default function Header({title,isVisible}){
    return (
        <div>
            <h1>{title}</h1>
            {isVisible?<button type="button" class="btn btn-success">Success</button>:
            ""}

        </div>
    )
}

Header.defaultProps = {
    title: "Default Title",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
}
// export default Header;
