import "../events/events.css"


function Events() {
    return(
        <>
        <section className="events">
            <h2 className="heading">Events</h2>
            <div className="timeline-items">

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">Monday from 4pm to 7pm</div> 
                        <div className="timeline-content">
                            <h3>Cyber security</h3>
                            <p> at computer lab F04, led by Webster Ifedha.</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">Tuesday from 5pm to 8pm </div> 
                        <div className="timeline-content">
                            <h3>UI/UX</h3>
                            <p> at computer lab F04, led by Manase Gunga.</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">Wednesday from 6pm to 9pm</div> 
                        <div className="timeline-content">
                            <h3>Web development</h3>
                            <p> at computer lab F04, led by Carolyne Githenduka.</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">Thursday from 4pm to 7pm</div> 
                        <div className="timeline-content">
                            <h3>Mobile apps development</h3>
                            <p>   led by Stanley Amunze.</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">Friday from 3pm to 6pm</div> 
                        <div className="timeline-content">
                            <h3>Cloud engineering</h3>
                            <p>  at computer lab F04, led by Paul Karanja.</p>
                        </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date"> Saturday from 1pm to 4pm</div> 
                        <div className="timeline-content">
                            <h3>Power Platform</h3>
                            <p> at computer lab F04, led by Evyonn Mbithe.</p>
                        </div>
                </div>
            </div>
            
        </section>
        </>
    )

}
export default Events;