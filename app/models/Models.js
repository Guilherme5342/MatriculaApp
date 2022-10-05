var Validator = require("jsonschema").Validator;
var validator = new Validator();

// export const checkValidation = validator.validate(data, modelObject);
// return checkValidation.errors;

export const PeriodoLetivo = {
	type: "object",
	properties: {
		ano: { type: "number", required: true },
		numero: { type: "number", required: true },
	},
	additionalProperties: false,
};

export const Coordenador = {
	type: "object",
	properties: {
		matricula: { type: "string", required: true },
		nome: { type: "string", required: true },
		email: { type: "string", required: true },
	},
	additionalProperties: false,
};

export const Unidade = {
	type: "object",
	properties: {
		codigo: { type: "string", required: true },
		nome: { type: "string", required: true },
	},
	additionalProperties: false,
};

export const Localidade = {
	type: "object",
	properties: {
		endereco: { type: "string", required: true },
	},
	additionalProperties: false,
};

export const Professor = {
	type: "object",
	properties: {
		nome: { type: "string", required: true },
	},
	additionalProperties: false,
};

export const CargaHorariaCurso = {
	type: "object",
	properties: {
		totalMinima: { type: "number", required: true },
		totalObrigatoria: { type: "number", required: true },
		optativaMinima: { type: "number", required: true },
		eletivaMaxima: { type: "number", required: true },
		maximaPorPeriodo: { type: "number", required: true },
	},
	additionalProperties: false,
};

export const HorarioSemanal = {
	type: "object",
	properties: {
		dia: { type: "string", required: true },
		horaInicio: { type: "string", required: true },
		horaFim: { type: "string", required: true },
		local: { ...Localidade, required: true },
	},
	additionalProperties: false,
};

export const CargaHorariaDisciplina = {
	type: "object",
	properties: {
		total: { type: "number", required: true },
		teorica: { type: "number", required: true },
		pratica: { type: "number", required: true },
	},
	additionalProperties: false,
};
export const Disciplina = {
	type: "object",
	properties: {
		codigo: { type: "string", required: true },
		nome: { type: "string", required: true },
		modalidade: { type: "string", required: true },
		cargaHoraria: { ...CargaHorariaDisciplina, required: true },
		unidade: { ...Unidade, required: true },
		preRequisitos: {
			type: "array",
			items: Disciplina,
			required: true,
		},
	},
	additionalProperties: false,
};

export const DisciplinaHistoricoAcademico = {
	type: "object",
	properties: {
		status: { type: "string", required: true },
		mencao: { type: "string", required: true },
		periodo: { ...PeriodoLetivo, required: true },
		disciplina: { ...Disciplina, required: true },
	},
	additionalProperties: false,
};

export const DisciplinaEstruturaCurricular = {
	type: "object",
	properties: {
		tipo: { type: "string", required: true },
		nivel: { type: "number", required: true },
		disciplina: { ...Disciplina, required: true },
	},
	additionalProperties: false,
};

export const PrazoConclusao = {
	type: "object",
	properties: {
		minimo: { type: "number", required: true },
		medio: { type: "number", required: true },
		maximo: { type: "number", required: true },
	},
	additionalProperties: false,
};

export const Matricula = {
	type: "object",
	properties: {
		status: { type: "string", required: true },
		prioridade: { type: "number", required: true },
		motivoIndeferimento: { type: "string", required: true },
		aluno: { ...Aluno, required: true },
		turma: { ...Turma, required: true },
	},
	additionalProperties: false,
};

export const HistoricoAcademico = {
	type: "object",
	properties: {
		aluno: { ...Aluno, required: true },
		disciplinas: {
			type: "array",
			items: Disciplina,
			required: true,
		},
	},
	additionalProperties: false,
};

export const EstruturaCurricular = {
	type: "object",
	properties: {
		codigo: { type: "string", required: true },
		status: { type: "string", required: true },
		periodoLetivoEntradaVigor: { ...PeriodoLetivo, required: true },
		disciplinas: {
			type: "array",
			items: Disciplina,
			required: true,
		},
		prazoConclusao: { ...PrazoConclusao, required: true },
		cargaHoraria: { ...CargaHorariaCurso, required: true },
	},
	additionalProperties: false,
};

export const Turma = {
	type: "object",
	properties: {
		codigo: { type: "string", required: true },
		vagasOfertadas: { type: "number", required: true },
		vagasOcupadas: { type: "number", required: true },
		sede: { type: "string", required: true },
		horarios: {
			type: "array",
			items: HorarioSemanal,
			required: true,
		},
		professores: {
			type: "array",
			items: Professor,
			required: true,
		},
		periodo: { ...PeriodoLetivo, required: true },
		disciplina: { ...Disciplina, required: true },
	},
	additionalProperties: false,
};

export const Curso = {
	type: "object",
	properties: {
		codigo: { type: "string", required: true },
		nome: { type: "string", required: true },
		grau: { type: "string", required: true },
		modalidade: { type: "string", required: true },
		turno: { type: "string", required: true },
		coordenador: { ...Coordenador, required: true },
		unidades: {
			type: "array",
			items: Unidade,
			required: true,
		},
		curriculos: {
			type: "array",
			items: EstruturaCurricular,
			required: true,
		},
	},
	additionalProperties: false,
};

export const Aluno = {
	type: "object",
	properties: {
		matricula: { type: "string", required: true },
		nome: { type: "string", required: true },
		email: { type: "string", required: true },
		ira: { type: "number", required: true },
		curriculo: { type: "string", required: true },
		status: { type: "boolean", required: true },
		periodoIngresso: { ...PeriodoLetivo, required: true },
		curso: { ...Curso, required: true },
	},
	additionalProperties: false,
};
