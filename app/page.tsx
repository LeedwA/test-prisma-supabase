"use client"

export default function Home() {


  async function testCreate()  {
    console.log("create--------------");
      //注意使用await
    const res = await fetch("/api/create-c", {
      method: "GET"
    });
    if(res.ok){
    //注意使用await
      const data = await res.json();
      //这里踩坑了： 使用的data.toString报错了。使用JSON.stringify 解析json 才行
      console.log("xxxxxxxxxxxxx" + JSON.stringify(data) ) 
    }

  }

 async function testRead()  {
    console.log("read--------------");
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
