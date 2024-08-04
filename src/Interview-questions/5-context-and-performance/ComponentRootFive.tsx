import Sidebar from './components/sidebar/Sidebar'
import Layout from './layout/Layout'
import { MainPart } from './MainPart'
import './styles/styles.css'

const Page = () => {
  return (
    <Layout>
      <Sidebar />
      <MainPart />
    </Layout>
  )
}

export default function ComponentRootFive() {
  return (
    <>
      <h3>
        Very slow "Page" component - click on expand/collapse to toggle nav
      </h3>
      <p>
        Those components that use only API won't re-render on nav
        expand/collapse anymore
      </p>
      <Page />
    </>
  )
}
