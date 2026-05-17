import { prisma } from "./lib/prisma.js";

async function main() {
  // const user = await prisma.user.create({
  //     data: {
  //         email: 'asdf@gmail.com',
  //         name: 'asdf',
  //         profilePhoto:'https://web.programming-hero/lv2.png'
  //     }
  // })
  // console.log(user);

  // const updateOne = await prisma.user.update({
  //     where: {
  //         id:2
  //     },
  //     data: {
  //         profilePhoto:'number 2'
  //     }
  // })
  // console.log(updateOne);
  // const updateMany = await prisma.user.updateMany({
  //   where: {
  //     profilePhoto: "number 2",
  //   },
  //   data: {
  //     profilePhoto: "https//:web.programming-hero/level2.png",
  //   },
  // });
  //       console.log(updateMany);

//   const deleteOne = await prisma.user.delete({
//     where: {
//       id: 3,
//     },
//   });
//   console.log(deleteOne);

  const findUser = await prisma.user.findMany();
  console.log(findUser);

  // const findONe = await prisma.user.findUnique({
  //     where: {
  //         id:2
  //     }
  // })
  // console.log(findONe);
}
main();
