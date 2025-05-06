package com.cpfvalidation.CpfValidate_API;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/cpf")
public class CpfController {

    @PostMapping
    public boolean validateCpf(@RequestBody Cpf num) {
        Cpf cpf = new Cpf(num.getNum());
        return cpf.ValidationCpf(num.getNum());
    }
    
}
