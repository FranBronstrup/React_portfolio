import { ExternalLink } from '@/components/ExternalLink';
import { Especilização, Profile } from '@/components/Profile';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import { WorkExperience, WorkTitle } from '@/components/WorkExperience';


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
          <Profile />
          <Especilização/>
          <div className={styles.socialMedia}>
            <ExternalLink
              link="https://www.linkedin.com/in/francine-bronstrup-4356a57b/"
              title="Linkedin"
            />
            <ExternalLink link="https://github.com/FranBronstrup" title="GitHub" />
            <ExternalLink link="#" title="Instagram" />
            </div> 
            <WorkTitle/>
            <WorkExperience
              rule="Financeiro/Administrativo"
              year="2019 - Atual"
              company="W2B Tecnologia"
            />
            <WorkExperience
              rule="Analista Contábil"
              year="2021-2022"
              company="Wollcont Contabilidade"
            />
            <WorkExperience
              rule="Analista Contábil"
              year="2019-2020"
              company="M&P Assessoria Contábil"
            />           
      </div>
      <div>
        {data.map((project) => {
          return (
            <ProjectImage
              key={project.id}
              img={project.imagem}
              alt={project.titulo}
            />
          );
        })}
      </div>
    </main>
  );
}
