package com.mnm.mnmpcd.DAO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter
public class LoginDAO {

    private String email ;
    private String password ;
    public LoginDAO(String email, String password){
        this.email = email;
        this.password = password;
    }
    public LoginDAO(){
    }
    @Override
    public String toString() {
        return "LoginDAO [email=" + email + ", password=" + password + "]";
    }
}