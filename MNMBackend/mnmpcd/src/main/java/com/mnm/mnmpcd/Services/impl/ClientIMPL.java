package com.mnm.mnmpcd.Services.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

public class ClientIMPL implements EmployeeService {
    @Autowired
    private ClientRepo clientRepo ;
    @Autowired
    private PasswordEncoder passwordEncoder ;
    @Override
    String addClient(ClientDAO clientDAO) {
    Client client =new Client(clientDAO.getIdClient(),
        clientDAO.getFiirstName(),
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
    ClientRepo.save(client);
    return(client.getFiirstName());
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
                    return new LoginResponse("Login Success",true)
                }
                else {
                    return new LoginResponse("Login Fail",false)
                }
            }
            else {
                return new LoginResponse("Login Fail",false)
            }
        }
        else {
            return new LoginResponse("Login Fail",false)
        }
    }
}