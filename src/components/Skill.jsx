import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/images/django.svg',
      label: 'Django',
      desc: 'Web Development'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/machine-learning.svg',
      label: 'Machine Learning',
      desc: 'ML'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/c.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
  ];




const Skill = () => {
    return(
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    Tools I prefer to use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Create Efficient Websites and ML Algorithms For Innovation and Future. 
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>(
                            <SkillCard
                            key={key} 
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill