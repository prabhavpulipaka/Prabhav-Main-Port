
const aboutItems = [
    {
      label: 'Project done',
      number: 6
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

const About = () => {
    return (
        <section
        id="about"
        className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Passionate Computer Science Engineering student with expertise in web development, machine learning, and IoT. Driven to innovate through impactful projects, blending technology with sustainable solutions.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                    </div>
                            ))
                        }
                        <img src="/images/logo.svg"  /* Need to change */
                             alt="logo"
                             width={30}
                             height={30}
                             className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About