package com.mnm.mnmpcd.Repo;
import org.springframework.data.jpa.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ClientRepo extends JpaRepository<Client,Integer> {
    optional <Client> findOneByEmailAndPassword(String email, String password);
    Client findByEmail(String email);

}
