import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { extname } from "https://deno.land/std@0.148.0/path/mod.ts";


export async function handler(
  req: Request,
  ctx:  MiddlewareHandlerContext,
) { 
  const url = new URL(req.url)
  const path = url.pathname 
  const fileExtension = extname(path); 
  if(path.startsWith("/spa" ) && !fileExtension){
    const textHtml =  Deno.readTextFile(`${Deno.cwd()}/static/index.html`)
    const headers = new Headers()
    headers.set("content-type","text/html;charset=UTF-8")
    const resp = new Response( await textHtml);
    resp.headers.set("content-type","text/html;charset=UTF-8")
    return resp;
  }else{
    const resp = await ctx.next(); 
  return resp;

  }



  
}