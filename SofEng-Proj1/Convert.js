
module.exports = function Convert(tests, homeworks){
    total = ((tests * .70)+(homeworks*.30));
    if(total > 100){
        console.error('Input is too large');
        return ;
        }   
    if(total < 0 ){
        console.error('Input is too small');
        return ;
        }        
    return total 
}
