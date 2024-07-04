package com.domain.project.sthenos.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.project.sthenos.entity.Routineday;
import com.domain.project.sthenos.repository.RoutinedayRepository;

@Service
public class RoutinedayService {

	@Autowired
	private RoutinedayRepository routineDayRepository;

	public List<Routineday> getAllRoutineday() {
		return routineDayRepository.findAll();
	}
	public Routineday getRoutinedayById(Integer id) {
		return routineDayRepository.findById(id).orElse(null);
	}
	public Routineday addRoutineday(Routineday routineDay) {
		return routineDayRepository.save(routineDay);
	}
	public Routineday editRoutineday(Routineday routineDay) {
		Routineday routineDayEdited = getRoutinedayById(routineDay.getId());
		return routineDayRepository.save(routineDayEdited);
	}
	public void deleteRoutinedayById(Integer id) {
		routineDayRepository.deleteById(id);
	}
}
