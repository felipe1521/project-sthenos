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
import com.domain.project.sthenos.entity.Category;
import com.domain.project.sthenos.service.CategoryService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@GetMapping("/app/category/all")
	public ResponseEntity<List<Category>> getAllCategory() {
		return new ResponseEntity<>(categoryService.getAllCategory(), HttpStatus.ACCEPTED);
	}
	@GetMapping("/app/category/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Integer id) {
		return new ResponseEntity<>(categoryService.getCategoryById(id), HttpStatus.ACCEPTED);
	}
	@PostMapping("/app/category/add")
	public ResponseEntity<Category> addCategory(@RequestBody Category category) {
		return new ResponseEntity<>(categoryService.addCategory(category), HttpStatus.CREATED);
	}
	@PutMapping("/app/category/edit")
	public ResponseEntity<Category> editCategory(@RequestBody Category category) {
		return new ResponseEntity<>(categoryService.editCategory(category), HttpStatus.CREATED);
	}
	@DeleteMapping("/app/category/delete/{id}")
	public ResponseEntity<Category> deleteCategoryById(@PathVariable Integer id) {
		categoryService.deleteCategoryById(id);
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
