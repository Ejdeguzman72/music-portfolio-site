import React from 'react';
import { Table } from 'react-bootstrap';
import { MusicTabsComponent } from './music-tabs-component';

export class MusicComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div>      
                 <div>
                     <div id="music-background">
                        <MusicTabsComponent />
                     </div>
                </div>                             
            </div>          
        )
    }
}