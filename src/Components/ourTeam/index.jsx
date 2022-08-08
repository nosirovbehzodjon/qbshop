import React from "react";
import "./index.scss";

const OurTeam = () => {
    return (
        <section className="team__container">
            <aside className="img__team">
                <img src="Images/team.png" alt="team" />
            </aside>
            <aside className="text__team">
                <h1>OUR TEAM</h1>
                <p>
                    Our Team sum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac ornare nisl, a ornare ipsum. Vivamus venenatis
                    sodales sapien, ut condimentum ante ultricies et. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nunc cursus pellentesque arcu sit
                    amet placerat. Cras ut erat aliquet, suscipit tellus vitae,
                    tempus magna.
                </p>
            </aside>
        </section>
    );
};

export default OurTeam;
