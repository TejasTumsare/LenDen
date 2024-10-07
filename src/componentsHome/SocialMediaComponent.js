import Facebook from "../asset/svg/Facebook";
import Instagram from "../asset/svg/Instagram";
import Twitter from "../asset/svg/Twitter";
import './SocialMediaComponent.css';

export default function SocialMedia(){


    return(
        <section className="social-media">
            <h1>Discover our social media presence</h1>
            <div className="social-icons">
                <ul>
                    <li><a href=""><Instagram/></a></li>
                    <li><a href=""><Facebook/></a></li>
                    <li><a href=""><Twitter/></a></li>
                </ul>
            </div>
        </section>
    )
}