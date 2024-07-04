package com.domain.project.sthenos.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.project.sthenos.entity.Exercise;
import com.domain.project.sthenos.repository.ExerciseRepository;

@Service
public class ExerciseService {

	@Autowired
	private ExerciseRepository exerciseRepository;

	public List<Exercise> getAllExercise() {
		return exerciseRepository.findAll();
	}
	public Exercise getExerciseById(Integer id) {
		return exerciseRepository.findById(id).orElse(null);
	}
	public Exercise addExercise(Exercise exercise) {
		return exerciseRepository.save(exercise);
	}
	public Exercise editExercise(Exercise exercise) {
		Exercise exerciseEdited = getExerciseById(exercise.getId());
		return exerciseRepository.save(exerciseEdited);
	}
	public void deleteExerciseById(Integer id) {
		exerciseRepository.deleteById(id);
	}
}
