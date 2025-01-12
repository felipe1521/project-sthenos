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
import com.domain.project.sthenos.entity.Routineday;
import com.domain.project.sthenos.service.RoutinedayService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class RoutinedayController {

	@Autowired
	private RoutinedayService routineDayService;

	@GetMapping("/app/routineDay/all")
	public ResponseEntity<List<Routineday>> getAllRoutineday() {
		return new ResponseEntity<>(routineDayService.getAllRoutineday(), HttpStatus.ACCEPTED);
	}
	@GetMapping("/app/routineDay/{id}")
	public ResponseEntity<Routineday> getRoutinedayById(@PathVariable Integer id) {
		return new ResponseEntity<>(routineDayService.getRoutinedayById(id), HttpStatus.ACCEPTED);
	}
	@PostMapping("/app/routineDay/add")
	public ResponseEntity<Routineday> addRoutineday(@RequestBody Routineday routineDay) {
		return new ResponseEntity<>(routineDayService.addRoutineday(routineDay), HttpStatus.CREATED);
	}
	@PutMapping("/app/routineDay/edit")
	public ResponseEntity<Routineday> editRoutineday(@RequestBody Routineday routineDay) {
		return new ResponseEntity<>(routineDayService.editRoutineday(routineDay), HttpStatus.CREATED);
	}
	@DeleteMapping("/app/routineDay/delete/{id}")
	public ResponseEntity<Routineday> deleteRoutinedayById(@PathVariable Integer id) {
		routineDayService.deleteRoutinedayById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
