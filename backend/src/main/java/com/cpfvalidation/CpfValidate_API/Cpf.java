package com.cpfvalidation.CpfValidate_API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Cpf {

    @GetMapping("/")
    public String teste(){
        return "Testando";
    }
}
