import {UilEstate,UilUsersAlt,UilPackage,UilChart,UilSignOutAlt,UilClipboardAlt,UilMoneyWithdrawal,UilUsdSquare} from '@iconscout/react-unicons';
import img1 from '../components/Assets/1640517901247.png'
import img2 from '../components/Assets/IMG_20220719_115016_9.jpg'
import img3 from '../components/Assets/logo.jpg'

export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading:'Branches'
    },
    {
        icon: UilPackage,
        heading:'Products',
    },
    {
        icon:UilChart,
        heading:"Analytics"
    }
];

export const CardsData=[
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title:"Revenue",
        color:{
            backGround:"linear-gradient(180deg,#ff919d 0%,#fc929d 100%)",
            boxShadow:"0px 10px 20px 0px #fdc0c7",
        },
        barValue:70,
        value:"14,270",
        png:UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,40],
            },
        ],
    },
    {
        title:"Expenses",
        color:{
            backGround:"linear-gradient(rgb(248,212,154)-146.42%,rgb(255 202 113)-46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue:60,
        value:"4,270",
        png:UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ],
    },
    
]



export const UpdateData=[
    {
        img:img1,
        name:"Andrew",
        noti:" has ordered an apple smart watch",
        time:"10 minutes ago"
    },
    {
        img:img2,
        name:"James",
        noti:"has recieved samsung gadget for charging",
        time:"30 minutes ago"
    },
    {
        img:img3,
        name:"Wilson",
        noti:" has ordered apple smart watch, samsung battery",
        time:"1 minutes ago"
    },
]