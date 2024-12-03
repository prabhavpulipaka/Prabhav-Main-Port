import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/blog.png',
      title: 'Webiste Blog-Thoughts',
      tags: ['Backend', 'Python', 'Development'],
      projectLink: 'https://github.com/prabhavpulipaka/Django_Blog.git'
    },
    {
      imgSrc: '/images/price.png',
      title: 'Car Price Prediction',
      tags: ['Regression', 'ML'],
      projectLink: 'https://github.com/prabhavpulipaka/Car-Price-Prediction-ML.git'
    },
    {
      imgSrc: '/images/sdlc.png',
      title: 'Fashion E-Commerce SDLC',
      tags: ['Web-design', 'Development','SEPM'],
      projectLink: 'https://github.com/prabhavpulipaka/Fashion-E-Com-SEPM.git'
    },
    {
      imgSrc: '/images/kyc.png',
      title: 'Online Video KYC',
      tags: ['API', 'Development', 'Backend', 'ML'],
      projectLink: 'https://github.com/prabhavpulipaka/Online-Video-KYC.git'
    },
    {
      imgSrc: '/images/netflix.png',
      title: 'Netflix Home Page-Clone',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/prabhavpulipaka/Netflix-Home-Page.git'
    },
  ];



const Work = () => {
    return(
        <section 
        id="work"
        className="section">
            <div className="container">

                <h2 className="headline-2 mb-8">
                My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                     {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        
                        />
                     ))}
                </div>
            </div>
        </section>
    )
}

export default Work