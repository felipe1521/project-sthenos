package com.domain.project.sthenos.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.domain.project.sthenos.entity.Record;
import com.domain.project.sthenos.repository.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepository;

	public List<Record> getAllRecord() {
		return recordRepository.findAll();
	}
	public Record getRecordById(Integer id) {
		return recordRepository.findById(id).orElse(null);
	}
	public Record addRecord(Record record) {
		return recordRepository.save(record);
	}
	public Record editRecord(Record record) {
		Record recordEdited = getRecordById(record.getId());
		return recordRepository.save(recordEdited);
	}
	public void deleteRecordById(Integer id) {
		recordRepository.deleteById(id);
	}
}
