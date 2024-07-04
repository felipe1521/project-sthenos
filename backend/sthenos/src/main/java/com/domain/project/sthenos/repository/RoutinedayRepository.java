package com.domain.project.sthenos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.domain.project.sthenos.entity.Routineday;

@Repository
public interface RoutinedayRepository extends JpaRepository<Routineday, Integer> {
}
