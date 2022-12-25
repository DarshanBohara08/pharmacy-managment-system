export const sidebar=[
    {
        id:1,
        name:"Dashboard",
        link:"/"
    },
    {
        id:2,
        name:"Inventory",
        link:"/inventory",
        subItem:{
            data:[
                {
                    id:1,
                    link:"/inventory/listofmedicine",
                    name:"List of Medicine "
                },
                {
                    id:2,
                    link:"/inventory/medicinegroup",
                    name:"Medicine Group"
                },
            ]
        }
    },{
        id:3,
        name:"Report",
        link:"/report",
        subItem:{
            data:[
                {
                    id:1,
                    link:"/report/salesreport",
                    name:"Sales Report "
                },
                {
                    id:2,
                    link:"/report/paymentsreport",
                    name:"Payment Report"
                },
            ]
        }
    },{
        id:4,
        name:"Configuration",
        link:"/configuration"

    }
]