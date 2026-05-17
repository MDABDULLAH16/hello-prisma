import { prisma } from "./lib/prisma.js";

async function main() {
    const user = await prisma.user.create({
        data: {
            email: 'abcd@gmail.com',
            name: 'abdullah',
            profilePhoto:'https://web.programming-hero/lv2.png'
        }
    })
    console.log(user);
    
}
main()