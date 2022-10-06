export const PeriodoLetivo = {
	ano: 2025,
	numero: 3,
};

export const Coordenador = {
	matricula: 8000,
	nome: "Roerto Carlos",
	email: "email@email.email",
};

export const Unidade = {
	codigo: "ENE",
	nome: "Departamento de Entropia",
};

export const Localidade = {
	endereco: "Sala 69",
};

export const Professor = {
	nome: "Pedro Paulo Pereira Postgree",
};

export const CargaHorariaCurso = {
	totalMinima: 8000,
	totalObrigatoria: 6969,
	optativaMinima: 10,
	eletivaMaxima: 5000,
	maximaPorPeriodo: 420,
};

export const CargaHorariaDisciplina = {
	total: 120,
	teorica: 12,
	pratica: 5,
};

export const PrazoConclusao = {
	minimo: 20,
	medio: 2,
	maximo: 1,
};

export const HorarioSemanal = {
	dia: "setima-feira",
	horaInicio: "25",
	horaFim: "18",
	local: Localidade,
};

export const Disciplina = {
	codigo: "ENE516521",
	nome: "Introdução a Teoria da base do desenvolvimento teorico",
	modalidade: "presencial",
	cargaHoraria: CargaHorariaDisciplina,
	unidade: Unidade,
	preRequisitos: [
		{
			codigo: "ENE516521",
			nome: "Introdução a Teoria da base do desenvolvimento teorico",
			modalidade: "presencial",
			cargaHoraria: CargaHorariaDisciplina,
			unidade: Unidade,
			preRequisitos: [],
		},
		{
			codigo: "ENE516521",
			nome: "Introdução a Teoria da base do desenvolvimento teorico",
			modalidade: "presencial",
			cargaHoraria: CargaHorariaDisciplina,
			unidade: Unidade,
			preRequisitos: [
				{
					codigo: "ENE516521",
					nome: "Introdução a Teoria da base do desenvolvimento teorico",
					modalidade: "presencial",
					cargaHoraria: CargaHorariaDisciplina,
					unidade: Unidade,
					preRequisitos: [],
				},
			],
		},
	],
};

export const DisciplinaEstruturaCurricular = {
	tipo: "optatória",
	nivel: 50,
	disciplina: Disciplina,
};

export const DisciplinaHistoricoAcademico = {
	status: "Aprovado",
	mencao: "SS",
	periodo: PeriodoLetivo,
	disciplina: Disciplina,
};

export const Turma = {
	codigo: "ENE8546645",
	vagasOfertadas: 1,
	vagasOcupadas: 60,
	sede: "FT",
	horarios: [HorarioSemanal, HorarioSemanal],
	professores: [Professor],
	periodo: PeriodoLetivo,
	disciplina: Disciplina,
};

export const EstruturaCurricular = {
	codigo: "42069",
	status: "ativa",
	periodoLetivoEntradaVigor: PeriodoLetivo,
	disciplinas: [Disciplina, Disciplina, Disciplina, Disciplina],
	prazoConclusao: PrazoConclusao,
	cargaHoraria: CargaHorariaCurso,
};

export const Curso = {
	codigo: "12e897sd",
	nome: "Engenharia de Jogos",
	grau: "graudação",
	modalidade: "presencial",
	turno: "vespertino",
	coordenador: Coordenador,
	unidades: [Unidade, Unidade],
	curriculos: [EstruturaCurricular, EstruturaCurricular],
};

export const Aluno = {
	matricula: "45156144",
	nome: "Saulo Silva Souza Serafim",
	email: "ss@aluno.unb.ca",
	ira: 55,
	curriculo: "42069",
	status: true,
	periodoIngresso: PeriodoLetivo,
	curso: Curso,
};

export const Matricula = {
	status: "Indeferido",
	prioridade: 69,
	motivoIndeferimento: "Aluno corno",
	aluno: Aluno,
	turma: Turma,
};

export const HistoricoAcademico = {
	aluno: Aluno,
	disciplinas: [
		DisciplinaHistoricoAcademico,
		DisciplinaHistoricoAcademico,
		DisciplinaHistoricoAcademico,
		DisciplinaHistoricoAcademico,
	],
};
