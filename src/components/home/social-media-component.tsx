import React from 'react';
import { Link } from 'react-router-dom';

export class SocialMediaBarComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="icon-bar">
                    <Link to="/home" className="facebook"><i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="/https://open.spotify.com/artist/2YHRZfwlJv8q8P0RVlmc3Z?si=8re1-QftSWmxa-nxCFriaw" className="spotify"><i className="fa fa-spotify"></i>
                    </Link>
                    <Link to="/home" className="soundcloud"><i className="fa fa-soundcloud"></i>
                    </Link>
                    <Link to="/https://www.instagram.com/friday_502/" className="instagram"><i className="fa fa-instagram"></i>
                    </Link>
                </div>
            </div>
        )
    }
}