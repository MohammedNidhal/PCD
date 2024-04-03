package com.mnm.mnmpcd.Services.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpSession;

import com.mnm.mnmpcd.DAO.ClientDAO;
import com.mnm.mnmpcd.Entity.Client;
import com.mnm.mnmpcd.Repo.ClientRepo;
import com.mnm.mnmpcd.Response.LoginResponse;
import com.mnm.mnmpcd.Services.ClientService;


public class ClientIMPL implements ClientService {
    @Autowired
    private ClientRepo clientRepo ;
    @Autowired
    private PasswordEncoder passwordEncoder ;
    @Override
    String addClient(ClientDAO clientDAO) {
    Client client =new Client(clientDAO.getIdClient(),
        clientDAO.getFirstName(),
        clientDAO.getLastName(),
        clientDAO.getEmail(),
        this.passwordEncoder.encode(clientDAO.getPassword()),
        clientDAO.getGender(),
        clientDAO.getBirthday(),
        clientDAO.getPostalCode(),
        clientDAO.getCity(),
        clientDAO.getCountry(),
        clientDAO.getAddress()
    );
    clientRepo.save(client);
    return(client.getFirstName());
    }

    @Override 
    public LoginResponse loginClient(LoginDAO loginDAO) {
        String msg="";
        Client client1= clientRepo.findByEmail(loginDAO.getEmail());
        if (client!= null){
            String password=loginDAO.getPassword();
            String encodedPassword=client1.getPassword();
            Boolean PwdIsRight=passwordEncoder.matches(password,encodedPassword);
            if (PwdIsRight){
                Optional<Client> client=clientRepo.findOneByEmailAndPassword(loginDAO.getEmail(),encodedPassword());
                if (client.isPresent()){
                    session.setAttribute("user", client1); // Store user in session upon successful login
                    return new LoginResponse("Login Success",true);
                }
                else {
                    return new LoginResponse("Login Fail",false);
                }
            }
            else {
                return new LoginResponse("Login Fail",false);
            }
        }
        else {
            return new LoginResponse("Login Fail",false);
        }
    }
}