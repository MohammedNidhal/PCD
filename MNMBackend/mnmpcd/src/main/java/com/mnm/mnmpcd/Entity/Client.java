package com.mnm.mnmpcd.Entity;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;
import java.util.Date; 
import java.util.HashSet;
import java.util.Set;
@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter

@Entity
@Table(name = "client")
public class Client {
@Id 
@Column(name = "idClient")
@GeneratedValue(strategy = GenerationType.AUTO)
private int idClient;

@Column(name = "firstname")
private String firstName;

@Column(name = "lastname")
private String lastName;
@NaturalId(mutable=true)
@Column(name = "email")
private String email;

@Column(name = "password")
private String password;

@Column(name = "gender")
private String gender;

@Column(name = "birthday")
private Date birthday;

@Column(name = "postalcode")
private int postalCode;

@Column(name = "city")
private String city;

@Column(name = "country")
private String country;

@Column(name = "address")
private String address;

@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
private Set<Order> orders = new HashSet<>();

}
