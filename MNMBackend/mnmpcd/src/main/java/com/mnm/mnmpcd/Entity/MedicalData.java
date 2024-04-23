package com.mnm.mnmpcd.Entity;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date; 

@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter

@Entity
@Table(name = "medicaldata")
public class MedicalData {
    @Id 
    @Column(name = "idmedical")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idMedical;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idclient", referencedColumnName = "idclient")
    private Client client;

    
    @Column(name = "dateupdate")
    private Date dateUpdate;


    @Column(name = "sleephours")
    private float sleepHours;
    
    @Column(name = "mass")
    private float mass;
    
    @Column(name = "height")
    private String height;
    
    @Column(name = "foordtype")
    private String foodType;
    
    @Column(name = "bloodpressure")
    private boolean bloodPressure;
    
    @Column(name = "bloodsugar")
    private boolean bloodSugar;
    
    @Column(name = "heartrate")
    private int heartRate;
    
    @Column(name = "foodallergies")
    private String foodAllergies;
    @Column(name = "medicalcondition")
    private String medicalCondition;
}
