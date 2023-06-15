import React from "react";
import PropTypes from "prop-types";
import './style.css';

export const Profile = ({ imageUrl, name, designation }) => {
    return (
        <div className="profileContainer">
            <section className="imageContainer">
                {imageUrl ? 
                    <img src={imageUrl} /> :
                    <div className="firstChar">
                        {name[0]}
                    </div>
                }
            </section>
            <section className="profileDetails">
                <div className="profileName">
                    {name}
                </div>
                <div className="profileDesignation">
                    {designation}
                </div>
            </section>
        </div>
    )
}

Profile.prototypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
};

Profile.defaultProps = {
    imageUrl: "https://cdn-icons-png.flaticon.com/256/1077/1077114.png",
}
