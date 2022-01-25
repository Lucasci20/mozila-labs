import { Navbar } from '../../components/Navbar/Navbar'

import './index.scss'
import backgroundImg from '../../assets/images/background.png'
import firefoxRealityImg from '../../assets/images/firefoxReality.png'
import commonVoiceImg from '../../assets/images/common-voice.png'
import hubsImg from '../../assets/images/hubs.png'
import blackContainerVr from '../../assets/images/black-reality-vr.png'
import blackContainerCommonVoice from '../../assets/images/black-common-voice.png'
import blackContainerHtc from '../../assets/images/black-htc.jpg'
import signUpImg from '../../assets/images/Sign-up.png' 


export function Home(){
    return (
        <div id="home-page">
            <header style={{backgroundImage: `url(${backgroundImg})`}}>
                <Navbar />
                <section className='header-container'>
                    <div className='title'>
                        <h1>
                            Create, test,<br /> innovate, repeat.
                        </h1>
                        <p>
                            The future is here. This is the space for our latest creations,
                            innovations, and cutting-edge technologies for the greater good.
                        </p>

                        <div className="buttons">
                            <button className='button-animated'>Explore</button>
                            <a className='link' href='/'>Tour our Projects</a>
                        </div>
                    </div>
                </section>
            </header>

        <main>
            <section className='container'>
                <div className='image'>
                    <img src={firefoxRealityImg} alt='Realidade Virtual'></img>
                </div>

                <aside>
                    <div className='title'>
                        <h2>Firefox Reality</h2>
                        <p>
                            Will VR turn the internet upside down? Take Firefox Reality for a spin on a
                             virtual reality headst and find out. Meet a T-Rex or make robots dance the
                              Cha-Cha on the only internet browser made for VR.
                        </p>
                        <button className='animated'>Learn More</button>
                    </div>
                </aside>
            </section>

            <section className='container reverse'>
                    <div className='title'>
                        <h2>Common Voice</h2>
                        <p>
                            Experiment with your vocals and make every voice heard. Common Voice is a community
                             project that will help virtual assistants understand people from diverse backgrounds
                              and put expensive voice data at the fingertips of independent creators.
                        </p>
                        <button>Learn Now</button>
                    </div>

                <aside>
                <div className='image'>
                    <img src={commonVoiceImg} alt='Common Voice'></img>
                </div>
                </aside>
            </section>


            <section className='container'>
                <div className='image'>
                    <img src={hubsImg} alt='Hubs by Mozilla'></img>
                </div>

                <aside>
                    <div className='title'>
                        <h2>Hubs by Mozilla</h2>
                        <p>
                            Get together with your nearest or farthest friends on Hubs. Hubs is a
                             coffee shop, a conference room or whatever you want it to be. Build your
                              own virtual space or see why a VR space makes meetings feel more personal.
                        </p>
                        <button>Learn Now</button>
                    </div>
                </aside>
            </section>

            <section className='black-section'>
                <div className='container-black'>
                    <div className='title'>
                        <h2>Mozilla Labs in the News</h2>
                        <p>See what others are saying about our latest projects and innovations.</p>
                    </div>

                    <div className='content'>
                        <div>
                            <img src={blackContainerVr} alt='Virtual Reality'></img>
                            <h3>
                                Mozilla Releases Firefox Reality VR Browser for Oculus Go, Daydream Headsets
                            </h3>
                            <p>Mozilla Releases Firefox Reality VR Browser for Oculus Go, Daydream Headsets.</p>
                        </div>
                        <div>
                            <img src={blackContainerCommonVoice} alt='Voice recognition'></img>
                            <h3>
                                Mozilla goes multilingual with open source Common Voice speech recognition datasets
                            </h3>
                            <p>
                                Mozilla is expanding its crowdsourced Common Voice project — an initiative that’s setting
                                 out to create an open source voice-recognition dataset — to include more languages.
                            </p>
                        </div>
                        <div>
                            <img src={blackContainerHtc} alt='HTC'></img>
                            <h3>HTC Vive, Amazon & Mozilla Take VR Web Integration to the Next Level</h3>
                            <p>The plan is to make VR and the web even more seamless.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container sign-up'>
                <div>
                    <img src={signUpImg} alt='Sign up'></img>
                </div>

                <aside>
                    <div className='title'>
                        <h2>Get it first</h2>
                        <p>
                            Stay ahead of the curve and sign up for the latest news and updates from Mozila Labs.
                        </p>
                        <h4>Email adress</h4>
                        <input type='text'></input>
                        <input type='checkbox'></input>
                        <p>I'm okay with Mozilla handling my info as explained in this Privacy Policy</p>
                        <button>Sign Up</button>
                    </div>
                </aside>
            </section>
        </main>

        <footer>
            <section className='footer'>
                <div className='logo'>
                    <img alt='logo Mozilla Labs'></img>
                </div>
            </section>
        </footer>
        
        </div>
    )
}