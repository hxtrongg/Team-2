import { navigation } from '../../constants/navigation';
import { Link } from 'react-router-dom';

type ChildType = {
    id: number,
    name: string,
    link: string
}

type SingleNavType = {
    name: string,
    link: string,
    childs?: ChildType[] //object array type
}

const SingleNav = ({item} : {item: SingleNavType}) =>{
    return (
        <li>
            {/* <a href={item.link}>{item.name}</a> */}
            <Link className='text-slate-100' to={item.link}>{item.name}</Link>
            {
                item.childs && item.childs.length > 0 ? (
                   <div>
                        {
                            item.childs.map((child)=> {
                                return <a key={child.id} href={child.link}>{child.name}</a>
                            })
                        }
                    </div>
                )
                :
                null
            }
      </li>
    )
}

const Navigation = () => {
  return (
    <nav className="h-full overflow-y-auto">
    <ul className='flex flex-col gap-y-4 p-2'>
      {
        navigation.map((item)=> <SingleNav key={item.id} item={item} />)
      }
      
    </ul>
  </nav>
  )
}

export default Navigation