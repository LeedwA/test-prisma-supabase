"use client"

import prisma from "@/lib/prisma";


export default function Home() {


  async function testCreate()  {
    console.log("create--------------");
        await prisma.consumerX.create({
            data: {
              title : "张三",
              content : "CEO"
            }
        });
  }

 async function testRead()  {
    console.log("read--------------");
    const data =  await prisma.consumerX.findMany();
    console.log(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col">

        <div  onClick={testCreate}>
          create
        </div>

        <div className="mt-10">
          delete
        </div>

        <div className="mt-10">
          update
        </div>

        <div className="mt-10" onClick={testRead}>
          read
        </div>

      </div>

    </main>
  );
}
