import React from "react";
import {
  Link
} from "react-router-dom";

export default class JobViewerContent extends React.Component {
    render(){
        return (
            <div className="job-viewer__content">
                <div className="job-viewer__content__header">
                    <img className="job-viewer__content__img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
                    <div>
                        <h3 className="job-viewer__content__title">React Developer</h3>
                        <span className="job-viewer__content__subtitle">Facebook • Toronto, ON</span>
                    </div>
                    <div class="ml-auto">
                        <button class="btn btn--text btn--secondary">
                            Save
                        </button>
                        <button class="btn btn--fill btn--primary">
                            Apply
                        </button>
                    </div>
                </div>
                
                <div className="job-viewer__content__description">
                    <div class="mb-4">
                        <div className="font-weight-semibold mb-2">
                            Join the world's largest social network today!
                        </div>
                        <p>
                            Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.
                        </p>
                    </div>

                    <div>
                        <div className="font-weight-semibold mb-2">
                            Responsibilities
                        </div>
                        <ul>
                            <li>
                                Work closely with our product, design and partner teams to build new infrastructure for the Portal companion app using Objective C, Swift and React Native.
                            </li>
                            <li>
                                Implement native modules and UI components for iOS to enable new features and use cases for supporting and enhancing the Portal experience.
                            </li>
                            <li>
                                Build infrastructure pieces and developer tooling that improve developer efficiency when working on the app.
                            </li>
                            <li>
                                Analyze and optimize User Interface and Backend Application code for efficiency, performance and app reliability by creating dashboards and defining metrics to monitor app health.
                            </li>
                            <li>Minimum Qualification</li>
                            
                            <li>3+ years of experience developing iOS applications.</li>
                            
                            <li>3+ years coding experience in Objective C or Swift.</li>
                        </ul>
                    </div>
                </div>
                <div class="job-viewer__content__actions py-2">
                    <button class="btn btn--fill btn--primary">
                        Apply
                    </button>
                    <button class="btn btn--text btn--secondary">
                        Save
                    </button>
                </div>
            </div>
        );
    }
}