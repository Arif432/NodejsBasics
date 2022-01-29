const http  =  require ('http')

const request  =  http.createServer((req , res)=>{
    // console.log(req);
   if (req.url === '/') 
{
    res.end(`<a href="/about">GO about</a>`)
}

if ( req.url === "/about")
{
    res.end(
        `
        <a href="/">GO this is about back to home page</a>`
        )
}

})

// console.log(request);

request.listen(4000)