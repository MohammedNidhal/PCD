package com.mnm.mnmpcd.Controller;
import org.springframework.web.bind.annotation.RestController;
import com.mnm.mnmpcd.ClientDAO;
import com.mnm.mnmpcd.Services.ClientService;
import corg.springframework.beans.factory.annotation.Autowired;
@RestController
@CrossOrigin
@RequestMapping("api/v1/client")

public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping(path="/save")
    public String saveClient(@RequestBody ClientDAO clientDAO){
    String id = clientService.addClient(clientDAO);
    return(id) ;
    }

    @PostMapping(path="/login")
    public ResponseEntity<?> loginClient(@RequestBody LoginDAO loginDAO){
    LoginResponse loginResponse = clientService.loginClient(loginDAO);
    return(ResponseEntity.ok(loginResponse)) ;
    }







}
