import React from 'react';
import { Link } from 'react-router-dom';
import { MusicTabsComponent } from './music-tabs-component';
import { Table } from 'react-bootstrap';

export class MusicSinglesComponent extends React.Component<any, any> {
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
                            <h1 className="music-headings">Singles</h1>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 offset-3">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">#</th>
                                <th scope="col">Song Name</th>
                                <th scope="col">Artist</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                                </audio>
                                </th>
                                <th scope="row">1</th>
                                <td>All I See</td>
                                <td>Friday502</td>
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">2</th>
                                <td>Consider</td>
                                <td>Friday502</td>
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="Fridxy - Consider.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">3</th>
                                <td>MackBlood</td>
                                <td>Friday502</td> 
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">4</th>
                                <td>POTY</td>
                                <td>Friday502</td>
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">5</th>
                                <td>Pump Fake</td>
                                <td>Friday502</td>
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">6</th>
                                <td>Rockin It</td>
                                <td>Friday502</td>                           
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">7</th>
                                <td>Soccer</td>
                                <td>Friday502</td>                            
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">8</th>
                                <td>Stitch</td>
                                <td>Friday502</td>                          
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">9</th>
                                <td>Trippy</td>
                                <td>Friday502</td>                   
                                </tr>
                                <tr>
                                <audio controls>
                                    <source src="horse.ogg" type="audio/ogg" />
                                    <source src="horse.mp3" type="audio/mpeg" />
                                </audio>
                                <th scope="row">10</th>
                                <td>Double Think</td>
                                <td>Friday feat. LadyBreeze</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}