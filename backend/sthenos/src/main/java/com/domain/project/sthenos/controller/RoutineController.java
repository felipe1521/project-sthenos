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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.domain.project.sthenos.entity.Routine;
import com.domain.project.sthenos.service.RoutineService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class RoutineController {

	@Autowired
	private RoutineService routineService;

	@GetMapping("/app/routine/all")
	public ResponseEntity<List<Routine>> getAllRoutine() {
		return new ResponseEntity<>(routineService.getAllRoutine(), HttpStatus.ACCEPTED);
	}
	@GetMapping("/app/routine/{id}")
	public ResponseEntity<Routine> getRoutineById(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(routineService.getRoutineById(id), HttpStatus.ACCEPTED);
	}
	@PostMapping("/app/routine/add")
	public ResponseEntity<Routine> addRoutine(@RequestBody Routine routine) {
		return new ResponseEntity<>(routineService.addRoutine(routine), HttpStatus.CREATED);
	}
	@PutMapping("/app/routine/edit")
	public ResponseEntity<Routine> editRoutine(@RequestBody Routine routine) {
		return new ResponseEntity<>(routineService.editRoutine(routine), HttpStatus.CREATED);
	}
	@DeleteMapping("/app/routine/delete/{id}")
	public ResponseEntity<Routine> deleteRoutineById(@PathVariable("id") Integer id) {
		routineService.deleteRoutineById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
