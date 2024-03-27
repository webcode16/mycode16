import React from 'react'

export default function Home() {
    return (
        <>
            <section className='container'>
                <div className='career'>
                    <h2>Build your <span>Career</span> With <span>Us</span></h2>
                    <p>Everthing you need to build your Production Code</p>
                </div>
                <div className='career-main'>
                    <div className="career-one">
                        <div className="card-first">
                            <h2>HTML</h2>
                            <p>HTML is the standard markup language for Web pages.<br/>
                                With HTML you can create your own Website.<br/>
                                HTML is easy to learn - You will enjoy it!</p>
                                <button><a href="#">Start Learning..</a></button>
                        </div>

                    </div>
                    <div className="career-two">
                        <div className="card-two">
                            <h2>CSS</h2>
                        </div>
                    </div>
                    <div className="career-three">
                        <div className="card-three">
                            <h2>JAVASCRIPT</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
