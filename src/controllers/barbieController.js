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

const createBarbie = (req, res) =>{
    const { id, nome, profissao, anoLancamento } = req.body;

    if (!nome || !profissao) {
         return res.status(400).json({
      sucess: false,
      message: "Nome e casa são obrigatorios",
    }
}