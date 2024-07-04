package com.domain.project.sthenos.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="routineDay")
public class Routineday {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	@Column(name = "day")
	private String day;
	@ManyToOne
	@JoinColumn(name="exercise")
	private Exercise exercise;
	@Column(name = "series")
	private Integer series;
	@Column(name = "repetitions")
	private Integer repetitions;
	@ManyToOne
	@JoinColumn(name="routine")
	private Routine routine;
}
