import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {

    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"assets/img1.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"assets/img2.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"assets/img3.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"assets/img4.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={"assets/img5.jpg"} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* card carousel for Games */}
            <div className="container">
                <div id="carouselExample" className={`carousel carousel-${props.mode === "light" ? "dark" : "white"} slide`} data-bs-ride="carousel" >
                    <div className="carousel-item active">
                        <div className="Cardcar">
                            <div className="card ">
                                <img src="./assets/game1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">God Of War</h5>
                                    <p className="card-text">Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go
                                        </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Action, Adventure</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Assassins Creed (Mirage)</h5>
                                    <p className="card-text">Play as a cunning young street thief seeking answers in this majestic Middle Eastern open world. Experience the home of the</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Historical Action-Adventure</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Minecraft</h5>
                                    <p className="card-text">Minecraft has no set goal and can be played however you’d like! This is why it’s sometimes called a “sandbox game”</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">3D sandbox game</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game4.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Grand Theft Auto V</h5>
                                    <p className="card-text">Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Action, Adventure</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Cardcar">
                            <div className="card" >
                                <img src="./assets/game5.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Marvel's Spider-Man</h5>
                                    <p className="card-text">Marvel's Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Action-Adventure</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game6.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Control</h5>
                                    <p className="card-text">Control is a supernatural third-person action-adventure that challenges you to master a combination of supernatural abilities,</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Action-Adventure</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game7.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">C.O.D Modern Warfare</h5>
                                    <p className="card-text">Call of Duty: Modern Warfare, players will be thrust into an immersive narrative spanning the entire game. </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">First-Person Shooter</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                            <div className="card" >
                                <img src="./assets/game8.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Just Cause 4</h5>
                                    <p className="card-text">Just Cause 4 is an action-adventure game played from a third-person perspective. The player assumes the </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Adventure, Action</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="/about" className="btn btn-primary card-link">More Info</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev btn-left" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn-right" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
