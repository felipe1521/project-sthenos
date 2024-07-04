package com.domain.project.sthenos.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.project.sthenos.entity.Category;
import com.domain.project.sthenos.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public List<Category> getAllCategory() {
		return categoryRepository.findAll();
	}
	public Category getCategoryById(Integer id) {
		return categoryRepository.findById(id).orElse(null);
	}
	public Category addCategory(Category category) {
		return categoryRepository.save(category);
	}
	public Category editCategory(Category category) {
		Category categoryEdited = getCategoryById(category.getId());
		return categoryRepository.save(categoryEdited);
	}
	public void deleteCategoryById(Integer id) {
		categoryRepository.deleteById(id);
	}
}
