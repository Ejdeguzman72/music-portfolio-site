import React from 'react';
import { Link } from 'react-router-dom';
import { MusicTabsComponent } from './music-tabs-component';

export class MusicAlbumsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="music-background">
                    <MusicTabsComponent />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <h1 className="music-headings">Albums</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}