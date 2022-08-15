/* const multiplyByTwo = (num,cb) => {
  setTimeout(()=>{
  cb(undefined,num * 2);
},300)
}

const multiply = (num) => {
  multiplyByTwo(num,(err,result2)=>{
  if(!err){
  multiplyByTwo(result2,(err,result3)=>{
   if(!err){
   multiplyByTwo(result3,(err,result4)=>{
  console.log(result4)
   })
   }
   else {
   console.log("erro");
   }
  })
  }
  else{
  console.log("erro");
  }
  })
} */

const multiplyByTwo = (num) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 300);
  });
};

const multiply = (num) => {
  multiplyByTwo(num).then((data) => {
    multiplyByTwo(data).then((data) => {
      multiplyByTwo(data).then((data) => console.log(data));
    });
  });
};
multiply(10);
