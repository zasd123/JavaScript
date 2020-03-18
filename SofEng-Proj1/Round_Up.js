
module.exports = function Round_Up(total, missed_day){
    if((total)-(Math.round (total)) == (.4000000000000057)){
        if (missed_day < 5){
            total = total +.1;
            total = Math.round(total);
        }
    }
    
    if (total >= 93){ 
        return "A";
    }
    
    if (total < 93 && total >= 90){
        return "A-";
    }

    if (total < 90 && total >= 87){
        return "B+";
    }

    if (total < 87 && total >= 83){
        return "B";
    }

    if (total < 83 && total >= 80){
    return "B-";
    }

    if (total < 80 && total >= 77){
    return "C+";
    }

    if (total < 77 && total >= 73){
    return "C";
    }

    if (total < 73 && total >= 70){
    return "C-";
    }

    if (total < 70 && total >= 67){
    return "D+";
    }

    if (total < 67 && total >= 63){
        return "D";
    }    
    if (total < 63 && total >= 60){
        return "D-";
    }

    if (total < 60){
        return "F";
    }
    
} 
