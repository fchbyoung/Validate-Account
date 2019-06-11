function checkValidateAccount() {
    let input = prompt("Nhập Account : ");
    let patt = /[_a-z0-9]{6,}$/;

    let result = patt.test(input);

    if(result === true){
        alert(`Account ${input} hợp lệ`);
    }else{
        alert(`Account ${input} không hợp lệ`);
    }
}
checkValidateAccount();