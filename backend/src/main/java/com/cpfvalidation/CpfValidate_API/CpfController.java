package com.cpfvalidation.CpfValidate_API;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/cpf")
public class CpfController {

    @GetMapping("/{num}")
    public Cpf validateCpf(@PathVariable long num) {
        Cpf cpf = new Cpf(num);
        return cpf;
    }
    
}
