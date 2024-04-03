package com.mnm.mnmpcd.Services;
import com.mnm.mnmpcd.DAO.ClientDAO; 
import com.mnm.mnmpcd.DAO.LoginDAO; 
import com.mnm.mnmpcd.Response.LoginResponse;

public interface ClientService {

String addClient(ClientDAO clientDAO) ;
LoginResponse loginClient(LoginDAO loginDAO) ;

}
