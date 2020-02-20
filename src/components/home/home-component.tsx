import React from 'react';
import { any } from 'prop-types';
import { SocialMediaBarComponent } from './social-media-component';

export class HomeComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero">
                        <div id="hero-overlay">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}