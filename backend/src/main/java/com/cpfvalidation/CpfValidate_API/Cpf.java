package com.cpfvalidation.CpfValidate_API;



public class Cpf {
    private long num;
    private int firstDigitVerifier;
    private int secondDigitVerifier;
    private boolean valid;

    public Cpf(long num) {
        firstDigitVerifier = getOneDigit(num, 9);
        secondDigitVerifier = getOneDigit(num, 10);
        this.setNum(num);
    }

    public Cpf() {
    }
    
    private String convertToString(long data){
        return String.valueOf(data);
    }
    
    private int getOneDigit(long data, int length){
        return Integer.parseInt(convertToString(data).substring(length, length+1));
    }
    
    private int somaMulti(long num, int lengthOfNum){
        int somaNums = 0;
        
        for(int c = lengthOfNum; c > 1; c--){
           somaNums += getOneDigit(num, (lengthOfNum - c)) * c;
        }
        
        return somaNums;
    }
    
    private int generateDigit(int somaNums){
        int res = somaNums % 11;
        if(res < 2){
            return 0;
        }else{
            return 11 - res;
        }       
    }
    
    private boolean validationDigits(int n){
        if(generateDigit(n) == this.firstDigitVerifier || generateDigit(n) == this.secondDigitVerifier){
            return true;
        }
        return false;
    }

    public boolean ValidationCpf(long num){
        int n1 = somaMulti(num, 10);
        int n2 = somaMulti(num, 11);
        
        if(validationDigits(n1) && validationDigits(n2)){
            return true;
        }
        return false;
    }

    public long getNum() {
        return num;
    }

    public void setNum(long num) {
        this.num = num;

        this.valid = ValidationCpf(num);
    }

    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean v) {
        valid = v;
    }
}