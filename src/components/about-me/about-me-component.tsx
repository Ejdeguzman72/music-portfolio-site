import React from 'react';

export class AboutMeComponent extends React.Component <any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="about-me-background">
                        <div id="hero-overlay">
                            <div id="about-me-container">
                                <p>My name is Stephon Owens a.k.a "It's Friday502" I was born and raised in Louisville, Kentcky with a passion for msuic.
                                    Music has always played a big part in my life, especially rap and hip-hop. There have been many influences of my lfe. 
                                </p>

                                <p>Aside from music, i study Marketing at the University of Louisville. With my current skill set, I aim to utilize my marketing ability to showcase my music.
                                    I offer something different, unique, and extraordinary through my music and as me being an artist. I am proud to share my work with you all, as well as my production and team.
                                </p>

                                <p>
                                    Take a listen to my music and see what you think. Other features are linking to my social media. 
                                    Keep updated on music and perforamnces as well as contacting me.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}