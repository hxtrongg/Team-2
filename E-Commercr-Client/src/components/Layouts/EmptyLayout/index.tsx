import { Outlet } from 'react-router-dom'

const EmptyLayout = () => {
  return (
    <div className='container mx-auto'>
    <Outlet />
    </div>
  )
}

export default EmptyLayout