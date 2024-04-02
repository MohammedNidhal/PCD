package com.mnm.mnmpcd.Controller;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/v1/client")

public class ClientController {

    @PostMapping(path="/save")
    public String saveClient(@RequestBody ClientDAO clientDAO){
    String id = clientService.addClient(clientDAO);
    return(id) ;
    }









}
