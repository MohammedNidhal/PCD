package com.mnm.mnmpcd.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mnm.mnmpcd.Entity.Client;

@Repository
public interface ClientRepo extends JpaRepository<Client, Integer>{

}