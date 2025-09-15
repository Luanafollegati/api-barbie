import dados from "./../models/dados.js";
const { barbies } = dados;

const getAllBarbies = (req, res) => {
  const resultado = barbies;

  res.status(200).json({
    total: resultado.length,
    barbies: resultado,
  });
};

const getBarbieById = (req, res) => {
  let id = parseInt(req.params.id);

  const barbie = barbies.find((b) => b.id === id);

  res.status(200).json({
    success: true,
    menssage: "ID da barbie não encontrado!"
  });
};

const createBarbie = (req, res) => {
  const { id, nome, profissao, anoLancamento } = req.body;

  if (!nome || !profissao) {
    return res.status(400).json({
      success: false,
      message: "Nome e profissão da barbie são obrigatórios!!",
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
    success: true,
    message: "Barbie criada com sucesso!",
    barbie: novaBarbie,
    
  });
};

//deletar barbie
const deleteBarbie = (req, res) => {
  let id = parseInt(req.params.id);

  const barbieParaRemover = barbies.find((b) => b.id === id);

  if (!barbieParaRemover) {
    return res.status(404).json({
      success: false,
      message: `Barbie com id ${id} não encontrada!`,
    });
  }

  const barbiesFiltradas = barbies.filter((barbie) => barbie.id !== id);

  barbies.splice(0, barbies.length, ...barbiesFiltradas);

  res.status(200).json({
    success: true,
    message: `Barbie removida com sucesso!`,
    barbieParaRemover: barbieParaRemover,
  });
};

export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };
