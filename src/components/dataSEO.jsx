import '../styling/App.css'
import website from '../assets/images/2.png';
import tier from '../assets/images/1.png';
import entity from '../assets/images/3.png';
import pr from '../assets/images/5.png';
import keyword from '../assets/images/4.png';
export default function DataSEO() {
    return (
        <>
            <div className="data-seo">
                <h2>drive your seo growth with actual data</h2>
                <div className='data-div'>
                    <div className='one-feature'>
                        <div className='feature-text'>
                            <h3>visualize website</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam odit odio assumenda veritatis exercitationem, voluptatibus quisquam minima blanditiis error beatae est delectus amet earum ea aut, quo id ullam!</p>
                        </div>
                        <div className='feature-img'>
                            <img src={website} alt="" />
                        </div>
                    </div>
                    <div className='one-feature'>
                        <div className='feature-img'>
                            <img src={tier} alt="" />
                        </div>
                        <div className='feature-text'>
                            <h3>analyze hierachy</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam odit odio assumenda veritatis exercitationem, voluptatibus quisquam minima blanditiis error beatae est delectus amet earum ea aut, quo id ullam!</p>
                        </div>
                    </div>
                    <div className='one-feature'>
                        <div className='feature-text'>
                            <h3>find keywords</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam odit odio assumenda veritatis exercitationem, voluptatibus quisquam minima blanditiis error beatae est delectus amet earum ea aut, quo id ullam!</p>
                        </div>
                        <div className='feature-img'>
                            <img src={keyword} alt="" />
                        </div>
                    </div>
                    <div className='one-feature'>
                        <div className='feature-img'>
                            <img src={entity} alt="" />
                        </div>
                        <div className='feature-text'>
                            <h3>extract entities</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam odit odio assumenda veritatis exercitationem, voluptatibus quisquam minima blanditiis error beatae est delectus amet earum ea aut, quo id ullam!</p>
                        </div>
                    </div>
                    <div className='one-feature'>
                        <div className='feature-text'>
                            <h3>use pagerank</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam odit odio assumenda veritatis exercitationem, voluptatibus quisquam minima blanditiis error beatae est delectus amet earum ea aut, quo id ullam!</p>
                        </div>
                        <div className='feature-img'>
                            <img src={pr} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}