import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer bg-warning mt-5 shadow p-3">
            <div className="container">
                <h5 className="text-center text-light">&copy; CopyRight Reserved {currentYear}</h5>
            </div>
        </footer>
    );
};

export default Footer;