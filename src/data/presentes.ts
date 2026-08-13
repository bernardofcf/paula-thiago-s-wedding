import airfryer from "@/assets/presente-airfryer.jpg";
import panelas from "@/assets/presente-panelas.jpg";
import cafeteira from "@/assets/presente-cafeteira.jpg";
import robo from "@/assets/presente-robo.jpg";
import tacas from "@/assets/presente-tacas.jpg";
import toalhas from "@/assets/presente-toalhas.jpg";
import jantar from "@/assets/presente-jantar.jpg";
import luademel from "@/assets/presente-luademel.jpg";
import batedeira from "@/assets/presente-batedeira.jpg";

export type Presente = {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  imagem: string;
};

export const presentes: Presente[] = [
  {
    id: "airfryer",
    nome: "Air Fryer 5L",
    descricao: "Para os jantares rápidos de terça e as ceias improvisadas.",
    valor: 599,
    imagem: airfryer,
  },
  {
    id: "panelas",
    nome: "Jogo de Panelas Inox",
    descricao: "Cinco peças para os primeiros ensaios culinários a dois.",
    valor: 890,
    imagem: panelas,
  },
  {
    id: "cafeteira",
    nome: "Cafeteira Espresso",
    descricao: "O café das manhãs lentas de domingo.",
    valor: 1290,
    imagem: cafeteira,
  },
  {
    id: "robo",
    nome: "Robô Aspirador",
    descricao: "Porque o tempo juntos vale mais que o tempo limpando.",
    valor: 2199,
    imagem: robo,
  },
  {
    id: "tacas",
    nome: "Taças de Cristal",
    descricao: "Seis taças para brindar tudo o que vier.",
    valor: 420,
    imagem: tacas,
  },
  {
    id: "toalhas",
    nome: "Kit de Toalhas",
    descricao: "Algodão egípcio, macio como recomeço.",
    valor: 260,
    imagem: toalhas,
  },
  {
    id: "jantar",
    nome: "Aparelho de Jantar",
    descricao: "Vinte peças de porcelana para a mesa sempre cheia.",
    valor: 749,
    imagem: jantar,
  },
  {
    id: "batedeira",
    nome: "Batedeira Planetária",
    descricao: "Para os bolos de aniversário dos próximos cinquenta anos.",
    valor: 1499,
    imagem: batedeira,
  },
  {
    id: "luademel",
    nome: "Cota da Lua de Mel",
    descricao: "Um pedacinho do nosso primeiro destino a dois.",
    valor: 500,
    imagem: luademel,
  },
];
