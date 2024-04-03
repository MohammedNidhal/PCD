package com.mnm.mnmpcd.DAO;
import java.util.Date; 

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter
public class ClientDAO {

    private int idClient;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String gender;
    private Date birthday;
    private int postalCode;
    private String city;
    private String Country;
    private String Address;

}