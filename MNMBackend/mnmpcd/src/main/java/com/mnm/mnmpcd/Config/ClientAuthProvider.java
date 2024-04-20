package com.mnm.mnmpcd.Config;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import jakarta.annotation.PostConstruct;
import java.util.Base64;
@RequiredArgsConstructor
@Component

public class ClientAuthProvider {
@Value("${security.jwt.token.secret-key:secret-key}")
private String secretKey;

@PostConstruct
    protected void init(){
        secretKey=Base64.getEncoder().encodeToString(secretKey.getBytes());
    }
    public String createToken(ClientDAO clientDAO){
        Date now = new Date();
        Date validity=new Date(now.getTime()+3_600_000);
        return(JWT.create()
        .withIssuer(clientDAO.LoginDAO())
        .withIssuedAt(now)
        .withExpiresAt(validity)
        .withClaim("firstName")
    }
}
