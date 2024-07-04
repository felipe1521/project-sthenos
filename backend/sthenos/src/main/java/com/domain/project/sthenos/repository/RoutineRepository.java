package com.domain.project.sthenos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.domain.project.sthenos.entity.Routine;

@Repository
public interface RoutineRepository extends JpaRepository<Routine, Integer> {
}
