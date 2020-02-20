import React from 'react';

export class MusicTestComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <br></br>
                <audio controls>
                    <source src="Fridxy - All I See.wav" type="audio/wav" />
                </audio>
            </div>
        )
    }
}