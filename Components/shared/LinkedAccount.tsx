import Link from "next/link";
import { FC} from "react";
interface LinkAccountIn{
    url:string;
    children:React.ReactNode
}
const LinkedAccount:FC<LinkAccountIn> = ({url, children}) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-gray-300">
       <Link href={url}> {children}</Link>
       </div>
  )
}
export default LinkedAccount;
