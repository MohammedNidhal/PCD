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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin
@RequestMapping("api/v1/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping(path="/save")
    public String saveClient(@RequestBody ClientDAO clientDAO) {
        String id = clientService.addClient(clientDAO);
        return id; // Removed unnecessary parenthesis
    }

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
