import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import FutureIdea from './components/sections/FutureIdea'
import Goal from './components/sections/Goal'
import Hero from './components/sections/Hero'
import Learning from './components/sections/Learning'
import Project from './components/sections/Project'
import { content } from './content'

// 섹션들을 순서대로 조립하는 곳.
// content는 여기서만 불러오고, 각 컴포넌트에는 필요한 데이터만 props로 넘깁니다.
function App() {
  return (
    <>
      <Header logo={content.header.logo} nav={content.nav} ui={content.ui} />
      <main>
        <Hero profile={content.profile} stacks={content.stacks} hero={content.hero} />
        <Goal goal={content.goal} stacks={content.stacks} />
        <Project project={content.project} />
        <Learning learning={content.learning} />
        <FutureIdea idea={content.idea} />
      </main>
      <Footer profile={content.profile} footer={content.footer} />
    </>
  )
}

export default App
