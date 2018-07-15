function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

// getTempCallback('Philly', (err, temp) => {
//     if (err){
//         console.log('error', err);
//     }
//     else {
//         console.log('success', temp);
//     }
// });

function getTempPromise(location) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(79);
            reject('City not found');
        },1000);

    });
}

// getTempPromise('Lagos').then(
//     (temp)=>{
//     console.log('promise success', temp);
//     },
//     (err)=>{
//     console.log('promise error', err);
//     });

function addPromise(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a === "number" && typeof b === "number"){
            resolve(a + b);
        }
        else {
            reject('Either is NaN');
        }
    });
}

// console.log(addPromise(2,'kk'));
addPromise(2,90).then((sum)=>{
    console.log('success', sum);
},
    (err)=>{
        console.log('error',err);
    });
