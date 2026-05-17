import { prisma } from "./lib/prisma.js";

async function pagination() {

    // const insertMany = await prisma.user.createMany({
    //     data: [
    //         {name:'Mir',email:'mir@gmail.com'},
    //         {name:'Mizba',email:'mizba@gmail.com'},
    //         {name:'Tonmoy',email:'tonmoy@gmail.com'},
    //         {name:'Firoz',email:'firoz@gmail.com'},
    //         {name:'Mizan vai',email:'mizan@gmail.com'},
    //     ]
    // })
    // console.log(insertMany);
    

    const result = await prisma.user.findMany({
        where: {
            name: {
                contains: 'fi',
                mode:'insensitive'
            }
        },
        orderBy: {
            id:  'desc'
        }
    });
    console.log(result);
    
    

}
pagination()