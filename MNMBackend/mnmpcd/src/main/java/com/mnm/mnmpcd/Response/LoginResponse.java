package com.mnm.mnmpcd.Response;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data @AllArgsConstructor @NoArgsConstructor @Setter @Getter
public class LoginResponse {
String message ;
Boolean status;
public String toString() {
    return("Login response {message="+ message+", status="+ status+"}");
}
}
