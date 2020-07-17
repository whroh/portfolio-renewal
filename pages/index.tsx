import React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '../components/Layout'
import SkillList from '../components/SkillList'

const Index = (): JSX.Element => (
  <div id='wrap'>
    <DefaultLayout>
      <Head>
        <title>roh woohyeon®</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>
      <section className='section'>
        <h1 className='sr-only'>About</h1>
        <p>
          Hello, I’m Woohyeon Roh, a UI/UX developer based in South Korea. For
          past 3+ years, I've worked as a both designer and frontend developer
          with a UX driven background. Typography passionate, clean and pure
          code pursuing, I bridge the gap between design and development. I am
          able to quickly adapt to new challenges. Being quite hands-on, I enjoy
          getting involved in the whole process, starting from ideation and
          conceptualizing to designing, prototyping, and building. I also love
          learning new stuff and endeavor to quickly follow latest trend of
          technology.
        </p>
        <SkillList />
      </section>
    </DefaultLayout>
  </div>
)

export default Index