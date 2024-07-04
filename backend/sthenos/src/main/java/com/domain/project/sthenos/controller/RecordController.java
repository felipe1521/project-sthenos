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
import com.domain.project.sthenos.entity.Record;
import com.domain.project.sthenos.service.RecordService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class RecordController {

	@Autowired
	private RecordService recordService;

	@GetMapping("/app/record/all")
	public ResponseEntity<List<Record>> getAllRecord() {
		return new ResponseEntity<>(recordService.getAllRecord(), HttpStatus.ACCEPTED);
	}
	@GetMapping("/app/record/{id}")
	public ResponseEntity<Record> getRecordById(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(recordService.getRecordById(id), HttpStatus.ACCEPTED);
	}
	@PostMapping("/app/record/add")
	public ResponseEntity<Record> addRecord(@RequestBody Record record) {
		return new ResponseEntity<>(recordService.addRecord(record), HttpStatus.CREATED);
	}
	@PutMapping("/app/record/edit")
	public ResponseEntity<Record> editRecord(@RequestBody Record record) {
		return new ResponseEntity<>(recordService.editRecord(record), HttpStatus.CREATED);
	}
	@DeleteMapping("/app/record/delete/{id}")
	public ResponseEntity<Record> deleteRecordById(@PathVariable("id") Integer id) {
		recordService.deleteRecordById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
