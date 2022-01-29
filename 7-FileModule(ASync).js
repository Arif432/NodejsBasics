//reverse the string in upper case leeter
//call bacsk

// function  upper(last) 
// {
//     console.log(last.toUpperCase());
// }

// function rev(str) 
// {
//     console.log(str.split('').reverse().join(''));
//    const passing = str.split('').reverse().join('');
//    upper(passing)
// }

// function  calLbACK(name , revORupper)
// {
//     const parnam = `${name}`
//     revORupper(parnam)
// }

// calLbACK("arf nawaz ansari" , rev)
// calLbACK("arf nawaz ansari" , upper)
// const red = document.getElementById("red")
// const green =document.getElementById("green") 
// const blue = document.getElementById("blue")
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', ()=>{
//     setTimeout(() => {
//         red.style.color = "red";
//         blue.style.color = "green";
//          green.style.color = "blue";
//     }, 1000);
//      setTimeout(() => {
//         blue.style.color = "black";
//     }, 3000);
//      setTimeout(() => {
//         green.style.color = "white";
//     }, 4000);
// })

// next section

//time cheching perf hooks
// const { performance } = require('perf_hooks'); 
// const start = performance.now();


// const file = require('fs')
//async approach
//  file.readFile('./content/read1sync.txt' , 'utf8' ,
// (err , result)=>{
//     if (err) console.log(err);
//     const ans = result
//     console.log('first read');
//     file.readFile('./content/read2Sync.txt' , 'utf8',
//     (err, res)=>{
//         if (err) console.log(err);
//         const ans2 = res
//         console.log('reading ends');
//     file.writeFile
//     console.log('writin start');
//         ('./content/read2Sync.txt' , `utf8 ${ans} ${ans2}`,
//     (err , res)=>{
//         if (err) {
//             console.log(err)
//         }
//     console.log('wrinting end');
//     }
// )
//     }
// )
// }
// )



// simple ex of asynx
// // const write1 = file.writeFile('./content/read1sync.txt' , ()=>'utf8')
// // const write2 = file.writeFile('./content/read2Sync.txt' ,()=> 'utf8')
//  console.log('next');



 // time checkin
//  const end = performance.now();
// let timeElapsed = end - start  
// console.log("time taken", timeElapsed); 