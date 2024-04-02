package com.mnm.mnmpcd.DAO;
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
    public toString() {
        return ("LoginDAO [email=" + email + ", password=" + password +"]");
}
