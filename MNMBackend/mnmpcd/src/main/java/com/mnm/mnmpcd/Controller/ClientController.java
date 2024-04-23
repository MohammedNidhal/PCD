package com.mnm.mnmpcd.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mnm.mnmpcd.Entity.Client;
import com.mnm.mnmpcd.Repo.ClientRepo;
import com.mnm.mnmpcd.Exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "partiefixe")
@RequestMapping("api/v1/client")
public class ClientController {

    @Autowired
    private ClientRepo clientRepo;

    @GetMapping("/clients")
    public List<Client> getAllClients() {
        return clientRepo.findAll();
    }

    @PostMapping("/save")
    public Client createClient(@RequestBody Client client) {
        return clientRepo.save(client);
    }

    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable int id) {
        Client client = clientRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client not found with id: " + id));
        return ResponseEntity.ok(client);
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client clientDetails) {
        Client client = clientRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client not found with id: " + id));
        client.setFirstName(clientDetails.getFirstName());
        client.setLastName(clientDetails.getLastName());
        client.setBirthday(clientDetails.getBirthday());
        client.setEmail(clientDetails.getEmail());
        client.setAddress(clientDetails.getAddress());
        client.setCountry(clientDetails.getCountry());
        client.setPostalCode(clientDetails.getPostalCode());
        final Client updatedClient = clientRepo.save(client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable int id) {
        Client client = clientRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client not found with id: " + id));
        clientRepo.delete(client);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

