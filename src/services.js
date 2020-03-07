// mock application data

class Employer{
    constructor(id, img, title){
        this.id = id;
        this.img = img;
        this.title = title;
    }
    like(q){
        return this.title.toLowerCase().includes(q.toLowerCase());
    }
}
var facebook = new Employer(
    "1",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "Facebook"
);
var google = new Employer(
    "2",
    "https://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png",
    "Google"
);
var orbis = new Employer(
    "3",
    "https://orbiscommunications.com/wp-content/uploads/2019/11/ORBIS-ICON-BLACK.png",
    "Orbis Communications"
);
var oracle = new Employer(
    "4",
    "https://www.neotys.com/wp-content/uploads/2018/06/oracle-logo.png",
    "Oracle"
);
var scotiabank = new Employer(
    "5",
    "https://www.underconsideration.com/brandnew/archives/scotiabank_icon.png",
    "Scotiabank"
);
var amazon = new Employer(
    "6",
    "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/62c36898c1fccfb889efeb7ccefb50b7",
    "Amazon"
);
var rbc = new Employer(
    "7",
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1200px-RBC_Royal_Bank.svg.png",
    "RBC"
);
var yelp = new Employer(
    "8",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1200px-Yelp_Logo.svg.png",
    "Yelp"
);
var employers = [
    facebook,
    google,
    orbis,
    oracle,
    scotiabank,
    amazon,
    rbc,
    yelp
];
class Job {
    constructor(id, title, employer, locale, description){
        this.id = id;
        this.title = title;
        this.employer = employer;
        this.locale = locale;
        this.description = description;
    }
    like(q) {
        return this.title.toLowerCase().includes(q.toLowerCase())
            || this.employer.like(q);
    }
}

var jobs = [
    new Job(
        "1",
        "React Developer",
        facebook,
        "Toronto, ON",
        `
            <div>
                <div class="mb-4">
                    <div class="font-weight-semibold mb-2">
                        Join the world's largest social network today!
                    </div>
                    <p>
                        Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.
                    </p>
                </div>

                <div>
                    <div class="font-weight-semibold mb-1">
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
        `
    ),
    new Job(
        "2",
        ".NET Developer",
        orbis,
        "Hamilton, ON",
        `
            <p class="mb-4">
                Architect, design and develop company ecommerce website to increase sales transaction through website, working with other platforms to develop new features and provide support for sales organization on company website.
            </p>
            <p class="mb-4">
                Your mission as a .NET Developer at Orbis Communications - should you choose to accept it - is to leverage the latest and greatest tools to deliver industry leading functionality to Orbis Communications’ customers.
            </p>
            <div>
                <div class="mb-1 font-weight-semibold">As our Senior Web Developer (.NET), you will:</div>
                <ul>                
                    <li>Architect/design/back-end development for new features on orbiscommunications.com website.</li>
                    <li>Design/Implement Micro-Service platform for continuous development and deployment.</li>
                    <li>Work with different platform teams throughout organization to gather requirements and develop requirements into features</li>
                    <li>Gather requirements from stakeholders</li>
                    <li>Determine best technology to be used for projects</li>
                    <li>Communicate with team on project planning and delivery</li>
                </ul>
            </div>
        `
    ),
    new Job(
        "4",
        "Java Developer",
        rbc,
        "Toronto, ON",
        `
            <div class="mb-4">
                <div class="mb-2 font-weight-semibold">What is the opportunity?</div>
                <p>
                    In this role You will develop and maintain distributed system components to support sales OMS (Order Management System) project. This role is part Capital Markets Quantitative & Technology Services (QTS) and will be exposed real-time market data and trading systems.
                </p>
            </div>

            
            <div class="mb-4">
                <div class="mb-2 font-weight-semibold">What will you do?</div>            
                <ul>
                    <li>Become knowledgeable about order management & market data systems.</li>
                    <li>Learn the operational infrastructure needed to support the business.</li>
                    <li>Implement and support various tools (pricing, risk analysis, workflow and reporting) and infrastructure for business technology.</li>
                    <li>Perform day-to-day tasks as required by the business.</li>
                    <li>Proactively identify operational risks/ and control deficiencies.</li>
                    <li>Work with other groups within firm to help streamline processes Special projects as required.</li>
                </ul>
            </div>
            
            <div class="mb-4">
                <div class="mb-2 font-weight-semibold">What do you need to succeed?</div>         
                <ul>
                    <li>5-7 years of relevant career experience in Core Java, back-end server side programming.</li>
                    <li>Must have scripting skills in Linux bsh / ksh / csh, Python.</li>
                    <li>Strong client service orientation.</li>
                    <li>Ability to communicate effectively with other technology and business personnel.</li>
                    <li>Strong analytical and problem solving skills; Ability to work in fast-paced environments delivering quality solutions.</li>
                </ul>
            </div>
            
            
            <div>
                <div class="mb-2 font-weight-semibold">Nice to have:</div>   
                <ul>
                    <li>
                        C++ experience (in addition to Core Java) would be considered an asset.
                    </li>
                    <li>
                        Any Capital Markets professional/career experience would be considered an asset.
                    </li>
                </ul>
            </div>
        `
    ),
    new Job(
        "5",
        "Software Developer",
        google,
        "Markham, ON",
        `
            <p class="mb-4">
                Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.
            </p>
            <p class="mb-4">
                Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.
            </p>
            <p>
                Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another
            </p>
        `
    ),
    new Job(
        "6",
        "Java Developer",
        scotiabank,
        "Toronto, ON",
        `
            <p class="mb-4 font-weight-semibold">
                Join the Global Community of Scotiabankers to help customers become better off.
            </p>

            <div class="mb-4">
                <div class="mb-2 font-weight-semibold">The Team</div>
                <p>
                    This position belongs to a highly skilled development team that develops and supports various applications in growing Global Regulatory & Compliance Technology team. The team is responsible for providing specialized analysis, design, development, and support of cost effective, mission critical, on-line, risk management and decision support systems for business users within Scotiabank IT group.
                </p>
            </div>
            <div class="mb-4">
                <div class="mb-2 font-weight-semibold">
                    The Role
                </div>
                <p>
                    The incumbent will be responsible for implementing standards and best practices around the development of application services and common components. The incumbent will influence the technological solution in relationship to the architecture, design and development and leverage common components as part of delivering the design/solution. Provides an enterprise-wide perspective and input into IT decisions.
                </p>
            </div>
            <div class="mb-4">
                <div class="mb-1 font-weight-semibold">
                    Is this role right for you?
                </div>
                <ul>  
                    <li>                  
                        Work within a cross functional Agile team to deliver solutions for various business line of the bank
                    </li>
                    <li>       
                        Ability to take the lead on projects, but also work with others
                    </li>
                    <li>       
                        Ability to look at a problem from both a business and technical angle
                    </li>
                    <li>       
                        Keep current on rapidly changing technological trends, self-leaner on new technologies and maintain an understanding of the business and technology strategies.
                    </li>
                </ul>
            </div>
            
            <div>
                <div class="mb-1 font-weight-semibold">
                    Do you have the skills that will enable you to succeed in this role?
                </div>
                <ul>
                    <li>                    
                        A recognized degree in engineering, computer science, math or related discipline
                    </li>
                    <li>  
                        Extensive experience in JAVA related technologies and frameworks (J2EE, JSP, JSF 2, JUnit, Struts 1.x, ANGULAR JS, Spring Framework)
                    </li>
                    <li>
                        Extensive experience in Oracle/ SQL development and PL/SQL, as well as understanding of general database objects and structures
                    </li>
                    <li>
                        Experience with developing enterprise level web applications and web services.
                    </li>
                    <li>
                        Experience with relational databases (MySQL, PostgreSQL, SQL Server) would be an asset
                    </li>
                    <li>
                        Familiar with open Source DevOps tools (Bitbucket/GIT, Jenkins, Artifactory, Gradle, Docker)
                    </li>
                    <li>
                        Have exposure to Apache Nifi , Kafka and ElasticSearch
                    </li>
                    <li>
                        Excellent verbal and written communication skills
                    </li>
                </ul>
            </div>
        `
    ),
    new Job(
        "7",
        "DevOps Engineer",
        amazon,
        "Toronto, ON",
        `
            <p class="mb-4">
                The Amazon Fulfillment Technologies Support Team is looking for a DevOps engineer who will join the team which supports all software application responsible for shipment, item availability, customer promises, shipment optimization and other functions related to fulfillment services process.
            </p>
            <p class="mb-4">
                Your problem resolving skill will benefit customers directly, insuring Amazon able to meet all its commitments to our customers. Primary responsibilities include troubleshooting, diagnosing and fixing production software issues, developing monitoring solutions, performing software maintenance and configuration, implementing the fix for internally developed code (Perl, Ruby, C/C++, JAVA), performing SQL queries, updating, tracking and resolving technical challenges, build and develop tools which will automate daily operational activities. Responsibilities also include working alongside development on Amazon Corporate and Divisional Software projects, updating/enhancing our current software automation of support processes and documentation of our systems.
            </p>
            <p class="mb-4">
                Your solutions will impact our customers directly! This job requires you to constantly hit the ground running and your ability to learn quickly and work on disparate and overlapping tasks will define your success. High Impact production issues often require coordination between multiple Development, Operations and IT Support groups, so you get to experience a breadth of impact with various groups.
            </p>
            <p class="mb-4">
                The ideal candidate must be detail oriented, have superior verbal and written communication skills, strong organizational skills, able to juggle multiple tasks at once, able to work independently and can maintain professionalism under pressure. You must be able to identify problems before they happen and implement solutions that detect and prevent outages. You must be able to accurately prioritize projects, make sound judgments, work to improve the customer experience, and get the right things done.
            </p>
            <div class="mb-4">
                <div class="mb-1 font-weight-semibold">
                    Basic Qualifications
                </div>            
                <ul>
                    <li>B.S. in Computer Science or a related field.</li>
                    <li>2 or more years' overall development/technical support experience.</li>
                    <li>Object oriented development experience in C++ and/or Java.</li>
                    <li>Experience in UNIX/Linux operating system.</li>
                    <li>Experience in database architecture and perform SQL queries.</li>
                </ul>
            </div>
            
            <div class="mb-4">
                <div class="mb-1 font-weight-semibold">
                    Preferred Qualifications
                </div>
                <ul>
                    <li>Other desired technical skills include Perl, Ruby, Python</li>
                    <li>Proven ability to troubleshoot and identify the root cause of issues.</li>
                    <li>Demonstrates skill and passion for operational excellence.</li>
                </ul>
            </div>
            
            <p class="mb-4">
                In joining our team, you'll enjoy a competitive salary, great benefits, a creative and comfortable work environment, and the exciting opportunity to be part of a fast-paced and growing technology company.
            </p>
            <p>
                Amazon is an Equal Opportunity-Affirmative Action Employer Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation
            </p>
        `
    ),
    new Job(
        "8",
        "Front-end Engineer",
        yelp,
        "Toronto, ON",
        `
            <div class="mb-4">
                <div class="mb-1 font-weight-semibold">
                    Summary
                </div>
                <p>
                    Are you interested in leading the direction of the web platform for all of Yelp, and helping us adopt open source software like React and GraphQL to suit our needs? Our team supports the engineers who are providing the best user experience to millions of users! We create tooling, set best practices, and define web architecture patterns that scale. Our goal is to enable quick and effortless web development. We routinely tackle hard challenges and care deeply about efficient web infrastructure.  
                </p>
                <p>
                    Yelp engineering culture is driven by our values: we’re a cooperative team that values individual authenticity and encourages “unboring” solutions to problems. We enable all new engineers to deploy working code their first week, and your impact will only grow from there with the support of your manager, mentor, and team. At the end of the day, we are all about helping our users, growing as engineers, and having fun in a collaborative environment.
                </p>
            </div>
            <div class="mb-4">
                <div class="mb-1 font-weight-semibold">
                    What You Will Do:
                </div>
                <ul>
                    <li>
                        Design and build scalable web tooling/infrastructure/architecture to support our full stack engineers.
                    </li>
                    <li>
                        Own engineering projects from design to implementation to deployment and maintenance.
                    </li>
                    <li>
                        Work with a wide range of systems, processes and technologies to own and solve problems from end-to-end.
                    </li>
                    <li>
                        Promote cross-team awareness to optimize code-sharing and decrease time to market as a key member of the larger Javascript developer community at Yelp.
                    </li>
                    <li>
                        Help establish roadmap and architecture based on technology and Yelp’s needs.
                    </li>
                    <li>
                        Write clear and concise technical documentation on system designs and implementation.
                    </li>
                    <li>
                        Mentor other engineers and share the skills you’ve learned.
                    </li>
                </ul>
            </div>
            <div>
                <div class="mb-1 font-weight-semibold">
                    We Are Looking For:
                </div>
                <ul>                
                    <li>
                        Extensive experience with JavaScript, HTML and at least one front-end framework, preferably React.
                    </li>
                    <li>
                        Experience with modern web tooling; Webpack, Babel, Jest, Enzyme.
                    </li>
                    <li>
                        Experience with Unix systems.
                    </li>
                    <li>
                        Excellent written and verbal communication skills.
                    </li>
                    <li>
                        Ability to own a team project from scoping to implementation.
                    </li>
                    <li>
                        Responsiveness to changing needs of the business and ability to craft solutions that solve complex business problems.
                    </li>
                    <li>
                        Experience making incremental changes to large code bases.
                    </li>
                    <li>
                    2+ years of relevant industry experience.
                    </li>
                </ul>
            </div>
        `
    )
];

export default class JobsService{
    load(id){
        return jobs.find(i => i.id === id);
    }
    fetch(options) {
        var results = jobs;
        if (options.query != null && options.query.trim() !== '')
            results = jobs.filter(i => i.like(options.query));
        let start = (options.page - 1) * options.itemsPerPage;
        let end = options.page * options.itemsPerPage;
        return {
            done: results.length <= end,
            results: results.slice(start, end)
        };
    }
}