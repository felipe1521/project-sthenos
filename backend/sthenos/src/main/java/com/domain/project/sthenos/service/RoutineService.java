package com.domain.project.sthenos.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.project.sthenos.entity.Routine;
import com.domain.project.sthenos.repository.RoutineRepository;

@Service
public class RoutineService {

	@Autowired
	private RoutineRepository routineRepository;

	public List<Routine> getAllRoutine() {
		return routineRepository.findAll();
	}
	public Routine getRoutineById(Integer id) {
		return routineRepository.findById(id).orElse(null);
	}
	public Routine addRoutine(Routine routine) {
		return routineRepository.save(routine);
	}
	public Routine editRoutine(Routine routine) {
		Routine routineEdited = getRoutineById(routine.getId());
		return routineRepository.save(routineEdited);
	}
	public void deleteRoutineById(Integer id) {
		routineRepository.deleteById(id);
	}
}
