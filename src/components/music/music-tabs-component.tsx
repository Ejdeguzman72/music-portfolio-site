import React from 'react';
import { Link } from 'react-router-dom';

export class MusicTabsComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item active">
                            <Link to="/music-singles" className="nav-link">Singles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music-albums" className="nav-link">Albums</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music-performances" className="nav-link">Performances</Link>
                        </li>
                    </ul>
        
        )
    }
}