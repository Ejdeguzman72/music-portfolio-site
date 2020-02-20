import React from 'react';
import { Link } from 'react-router-dom';
import { MusicTabsComponent } from './music-tabs-component';

export class MusicPerformancesComponent extends React.Component<any, any> {
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
                            <h1 className="music-headings">Performances</h1>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">        
                            <video controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">        
                            <video controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-9">        
                            <video controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}