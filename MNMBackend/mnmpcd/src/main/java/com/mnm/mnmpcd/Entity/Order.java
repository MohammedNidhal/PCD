package com.mnm.mnmpcd.Entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date; 
import java.util.HashSet;
import java.util.Set;
@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter
@Entity
@Table(name = "order")
public class Order {
    @Id 
    @Column(name = "idorder")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idOrder;    

    @Column(name = "idclient")
    private int idClient;
    @Column(name = "iddelivery")
    private int idDelivery;
    @Column(name = "adressorder")
    private String adressOrder;
    
    @Column(name = "orderstatus")
    private String orderStatus;
    
    @Column(name = "orderdate")
    private Date orderDate;
    
    @Column(name = "paymentstatus")
    private String paymentStatus;
    
    @OneToMany(mappedBy = "Client", cascade = CascadeType.ALL)
    private Set<Order> orders = new HashSet<>();
}



