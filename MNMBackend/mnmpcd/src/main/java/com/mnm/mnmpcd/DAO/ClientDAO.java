package com.mnm.mnmpcd.DAO;
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