import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {

    const result =  await prisma.consumerX.create({
        data: {
          title : "张三",
          content : "CEO"
        }
    });

    console.log("-------------" + result);

    return NextResponse.json(
        {
            code : 1,
            data  : "hello world"
        }
    )
}