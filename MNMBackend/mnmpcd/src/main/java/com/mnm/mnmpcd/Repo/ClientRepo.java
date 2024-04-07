package com.mnm.mnmpcd.Repo;
import org.springframework.data.jpa.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepositories;
import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface ClientRepo extends JpaRepository<Client,Integer> {
    Optional <Client> findOneByEmailAndPassword(String email, String password);
    Client findByEmail(String email);

}
