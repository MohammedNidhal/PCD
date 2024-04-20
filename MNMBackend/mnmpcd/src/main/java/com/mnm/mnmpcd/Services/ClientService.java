package com.mnm.mnmpcd.Services;
import com.mnm.mnmpcd.DAO.ClientDAO; 
import com.mnm.mnmpcd.DAO.LoginDAO; 
import com.mnm.mnmpcd.Response.LoginResponse;
import javax.servlet.http.HttpSession;
import com.mnm.mnmpcd.Repo.ClientRepo;
import com.mnm.mnmpcd.Entity.Client;
public interface ClientService {

String addClient(ClientDAO clientDAO) ;
LoginResponse loginClient(LoginDAO loginDAO, HttpSession session) ;
List<Client> getClients();
Client registerClient(RegestrationRequset request);
Optional<Client> findByEmail(String Email);


}
