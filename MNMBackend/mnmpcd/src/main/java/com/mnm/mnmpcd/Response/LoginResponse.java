package com.mnm.mnmpcd.Response;
@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter
public class LoginResponse {
String message ;
Boolean status;
public String toString() {
    return("Login response {message="+ message+", status="+ status+"}")
}
}
