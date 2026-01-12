function GetData(dataId,getNextData){
    setTimeout(()=>{

          console.log("data",dataId);
          if(getNextData)
          {
            getNextData();
          }


    },2000);

  
}
//callback hell
//this is nested callback and this is not well orgarnized code
//the undersdaing and managing of this code is difficult for this we find solutio by the name of called promises
//promises
GetData(1,()=>{
    GetData(2,()=>{
        GetData(3,()=>{
            GetData(4);
        });
    });
});
