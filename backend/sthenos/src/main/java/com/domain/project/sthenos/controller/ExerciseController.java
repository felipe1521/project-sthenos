package com.domain.project.sthenos.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.domain.project.sthenos.entity.Exercise;
import com.domain.project.sthenos.service.ExerciseService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class ExerciseController {

	@Autowired
	private ExerciseService exerciseService;

	@GetMapping("/exercise/all")
	public ResponseEntity<List<Exercise>> getAllExercise() {
		return new ResponseEntity<>(exerciseService.getAllExercise(), HttpStatus.OK);
	}
	@GetMapping("/exercise/{id}")
	public ResponseEntity<Exercise> getExerciseById(@PathVariable Integer id) {
		return new ResponseEntity<>(exerciseService.getExerciseById(id), HttpStatus.OK);
	}
	@PostMapping("/exercise/add")
	public ResponseEntity<Exercise> addExercise(@RequestBody Exercise exercise) {
		return new ResponseEntity<>(exerciseService.addExercise(exercise), HttpStatus.CREATED);
	}
	@PutMapping("/exercise/edit")
	public ResponseEntity<Exercise> editExercise(@RequestBody Exercise exercise) {
		return new ResponseEntity<>(exerciseService.editExercise(exercise), HttpStatus.CREATED);
	}
	@DeleteMapping("/exercise/delete/{id}")
	public ResponseEntity<Exercise> deleteExerciseById(@PathVariable Integer id) {
		exerciseService.deleteExerciseById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
