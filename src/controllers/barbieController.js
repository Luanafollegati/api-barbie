import dados from "./../models/dados.js";
const { barbies } = dados;

const getAllBarbies = (req, req) => {
  const resultado = barbies;

  resultado.status(200).json({
    total: resultado.length,
    bruxos: resultado,
  });
};

const getBarbieById = (req, res) => {
  let id = parseInt(req.params.id);

  const barbie = barbie.find((b) => b.id === id);

  res.status(200).json({
    sucess: true,
    barbie: barbie,
  });
};

const createBarbie = (req, res) => {
  const { id, nome, profissao, anoLancamento } = req.body;

  if (!nome || !profissao) {
    return res.status(400).json({
      sucess: false,
      message: "Nome e profisssão da barbie são obrigatórios!!",
    });
  }

  const novaBarbie = {
    id: id,
    nome: nome,
    profissao: profissao,
    anoLancamento: anoLancamento,
  };

  barbies.push(novaBarbie);

  res.status(201).json({
    sucess: true,
    barbie: novaBarbie,
  });
};

//deletar barbie
const deleteBarbie = (req, res) => {
  let id = parseInt(req.params.id);

  const barbieParaRemover = barbies.find((b) => b.id === id);

  if (!barbieParaRemover) {
    return res.status(404).json({
      sucess: false,
      message: `Barbie com id ${id} não encontrada!`,
    });
  }

  const barbiesFiltradas = barbies.filter((barbie) => barbie.id !== id);

  barbies.splice(0, barbies.length, ...barbiesFiltradas);

  res.status(200).json({
    sucess: true,
    message: `Barbie removida com sucesso!`,
    brarbieParaRemover: barbieParaRemover,
  });
};

export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };
