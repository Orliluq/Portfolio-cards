import { IconType } from "react-icons";
import { BiHomeAlt } from 'react-icons/bi';
import { BsPerson} from 'react-icons/bs';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';

interface ILink {
    title: string;
    path: string;
    icon: IconType;
}

const links: ILink[] = [
    {
        title: "Home",
        path: "/portfolio/#",
        icon: BiHomeAlt
    },
    {
        title: "About",
        path: "/portfolio/#/about",
        icon: BsPerson
    },
    {
        title: "Experiences",
        path: "/portfolio/#/experiences",
        icon: MdOutlineScreenshotMonitor
    },
    // {
    //     title: "Resume",
    //     path: "/resume",
    //     icon: IoNewspaperOutline
    // }
]

export default links;