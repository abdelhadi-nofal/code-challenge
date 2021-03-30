
// let userNum  =prompt('plz enter 5 numbers');

function five(){
    let arr =[];
    for (let i= 0 ;i<5 ;i++){
        let userNum  =parseInt(prompt('plz enter 5 numbers')) ;
        console.log(typeof(userNum) );
        arr.push(userNum);
        

    }
    
    if(arr[0]<arr[1] && arr[0]<arr[2] && arr[0]<arr[2] && arr[0]<arr[3] && arr[0]<arr[4]){
        alert('MinNumber Is'+arr[0]);
        alert('MaxNumber Is'+arr[4]);

    }else if (arr[1]<arr[0] && arr[1]<arr[2]  && arr[1]<arr[3] && arr[1]<arr[4]){
        alert('MinNumber Is'+arr[1]);
        alert('MaxNumber Is'+arr[4]);
    }else if (arr[2]<arr[0]  && arr[2]<arr[1] && arr[2]<arr[3] && arr[2]<arr[4]){
        alert('MinNumber Is'+arr[2]);
        alert('MaxNumber Is'+arr[4]);
    }else if (arr[3]<arr[0] && arr[3]<arr[2] && arr[3]<arr[1]  && arr[3]<arr[4]){
        alert('MinNumber Is'+arr[3]);
        alert('MaxNumber Is'+arr[4]);
    }else if (arr[4]<arr[0] && arr[4]<arr[2] && arr[4]<arr[1] && arr[4]<arr[3] ){
        alert('MinNumber Is'+arr[4]);
        alert('MaxNumber Is'+arr[4]);
    }

    

    
    // return;
}

five()