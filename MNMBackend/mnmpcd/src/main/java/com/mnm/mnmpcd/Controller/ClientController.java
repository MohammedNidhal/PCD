package com.mnm.mnmpcd.Controller;

import com.mnm.mnmpcd.DAO.ClientDAO; 
import com.mnm.mnmpcd.Response.LoginResponse; 
import com.mnm.mnmpcd.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin
@RequestMapping("api/v1/client")
public class ClientController {

    @Autowired
    private ClientService clientService;
    private ClientRepo clientRepo;
    @GetMapping("/clients")
    public List<Client> getAllClients(){
        return(clientRepo.findAll());
    }
    //Create client rest api /signUP
    @PostMapping("/clients")
    public Client createClient(@RequestBody Client client) {
        return (clientRepo.save(client));
    }
    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable int id) {
        Client client=clientRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not found "+id));
        return(ResponseEntity.ok(client));
    }
    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClint(@PathVariable int id,@RequestBody Client clientDetails){
        Client client=clientRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not found "+id));
        client.setFirstName(clientDetails.getFirstName());
        client.setLastName(clientDetails.getLastName());
        client.setBirthday(clientDetails.getBirthday());
        client.setemail(clientDetails.getemail());
        client.setAddress(clientDetails.getAddress());
        client.setCountry(clientDetails.getCountry());
        client.setPostalCode(clientDetails.getPostalCode());
    }
    
    @DeleteMapping("/clients/{id}")
    public Map<String,Boolean> deleteClient(@PathVariable int id){
        Client client=clientRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not found "+id));
        clientRepo.delete(client);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return(ResponseEntity.ok(response));
    }









    
    private
    @PostMapping(path="/login")
    public ResponseEntity<LoginResponse> loginClient(@RequestBody LoginDAO loginDAO, HttpSession session) {
        LoginResponse loginResponse = clientService.loginClient(loginDAO,session);
        return ResponseEntity.ok(loginResponse); 
    }
    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "Logout successful";
    }
}
