const About = () => {
  return (
    <section id='about' className='pb-12'>
      <div className='container max-w-2xl'>
        <div className='text-sm text-foreground leading-relaxed space-y-4'>
          <p>
            Hi, I'm currently a second-year Ph.D. student in Computer Science at
            Emory University, under Dr. Steve Qin. I also serve as a Health
            Services Research Intern at the American Cancer Society, where I am
            directly supervised by Dr. Jason Zheng and Dr. Robin Yabroff.
          </p>
          <p>
            My research focuses on applying large language models (LLMs) to
            statistical genetics, with the aim of building more interpretable
            and accurate AI systems for disease risk estimation using human
            genetic data. I'm especially interested in how LLMs can be used to
            encode individual-level mutation profiles (like SNPs) and uncover
            meaningful genotype–phenotype patterns. Beyond model performance, I
            also care deeply about health equity—exploring how disease and
            financial burdens vary across populations, and developing tools that
            can support those facing medical and socioeconomic challenges.
          </p>
          <p>
            I come from an interdisciplinary background—earning my master’s
            degree in Epidemiology from Johns Hopkins University, and my
            bachelor’s degree in Horticultural Science with a minor in
            Bioinformatics back in China and Florida. This diverse training has
            shaped how I approach problems at the intersection of health, data,
            and computation.
          </p>
          <p>
            Outside of research, I spend most of my free time climbing
            (bouldering is my therapy), running, and occasionally smashing
            birdies on the badminton court. I also love streetphotography. I’m always chasing the next dyno or
            techy slab—and just like in research, I love a good challenge that
            makes me sweat a little.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
