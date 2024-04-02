package com.mnm.mnmpcd.Entity;
import javax.persistence.*;
@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter

@Entity
@Table(name = "client")
public class Client {
@Id 
@Column(name = "idClient")
@GeneratedValue(strategy = GenerationType.Auto)
private int idClient;

@Column(name = "firstname")
private String firstName;

@Column(name = "lastname")
private String lastName;

@Column(name = "email")
private String email;

@Column(name = "password")
private String password;

@Column(name = "gender",length =1)
private String gender;

@Column(name = "birthday")
private Date birthday;

@Column(name = "postalcode")
private int postalCode;

@Column(name = "city")
private String city;

@Column(name = "Country")
private String Country;

@Column(name = "Address")
private String Address;



}
