import {UilEstate,UilClipboardAlt,UilUsersAlt,UilPackage, UilChart,UilMoneyWithdrawal,UilUsdSquare} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const SidebarData = [
    {
        icon: UilEstate,
        title: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        title: "Orders"
    },
    {
        icon: UilUsersAlt,
        title: "Customers"
    },
    {
        icon: UilChart,
        title: "Analytics"
    },
    {
        icon: UilPackage,
        title: "Dashboard"
    },
    

];


export const CardsData = [
    {
        title:"Revenue",
        color: {
            backGround:'green',
            boxShadow: '0 10px 20px 0 #e0c6f5',
            
        },
        barValue:70,
        value: "30,000",
        icon: UilUsdSquare,
        series: [
            {
                name: "Balance",
                data: [32, 43, 24, 54, 23, 65, 134, 122],
            }
        ]
    },
    {
        title:"Expenditure",
        color: {
            backGround:'red',
            boxShadow: '0 10px 20px 0 #e0c6f5',
            
        },
        barValue:90,
        value: "17,000",
        icon: UilMoneyWithdrawal,
        series: [
            {
                name: "Savings",
                data: [32, 43, 24, 54, 23, 65, 134, 122],
            }
        ]
    },
    {
        title:"Sales",
        color: {
            backGround:'blue',
            boxShadow: '0 10px 20px 0 #e0c6f5',
            
        },
        barValue:40,
        value: "3,000",
        icon: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [32, 43, 24, 54, 23, 65, 134, 122],
            }
        ]
    },
]

// Recent Update Card Data

export const UpdateData = [
    {
        img:img1,
        name: "Lance Vance",
        noti: "Has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago"
    },
    {
        img:img2,
        name: "Michael Jackson",
        noti: "Has ordered Adidas Running Shoes .",
        time: "25 minutes ago"
    },
    {
        img:img3,
        name: "Will Smith",
        noti: "Has ordered Black MIB Shades and a Mafia Suit.",
        time: "2 hours ago"
    }
]