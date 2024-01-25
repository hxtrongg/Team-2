import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
     <Header  />
      <main className='py-3' style={{minHeight: 500}}>
          <div className="mx-auto ">
          <Outlet />
          </div>
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout