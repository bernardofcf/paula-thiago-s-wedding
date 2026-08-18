/**
 * Gerador de PIX Copia e Cola (BR Code EMV) estático.
 * Altere os dados abaixo pelos dados reais dos noivos.
 */
export const PIX_CONFIG = {
  /** Chave PIX (CPF, e-mail, telefone ou aleatória) */
  chave: "91981174524",
  /** Nome do recebedor (máx. 25 caracteres) */
  nome: "PAULA M M DO ROSARIO",
  /** Cidade do recebedor (máx. 15 caracteres) */
  cidade: "BELEM",
};

function tlv(id: string, value: string) {
  return id + String(value.length).padStart(2, "0") + value;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function sanitize(text: string, max: number) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 $%*+\-./:]/g, "")
    .toUpperCase()
    .slice(0, max);
}

/** Monta o payload PIX estático. Se valor for 0, o pagador insere o valor no app. */
export function gerarPixPayload(valor: number, identificador = "***") {
  const merchant =
    tlv("00", "BR.GOV.BCB.PIX") + tlv("01", PIX_CONFIG.chave);

  let payload =
    tlv("00", "01") +
    tlv("01", "11") +
    tlv("26", merchant) +
    tlv("52", "0000") +
    tlv("53", "986");

  // Se valor for maior que zero, adiciona ao payload. Se for 0, o campo 54 é omitido (valor variável)
  if (valor > 0) {
    payload += tlv("54", valor.toFixed(2));
  }

  payload +=
    tlv("58", "BR") +
    tlv("59", sanitize(PIX_CONFIG.nome, 25)) +
    tlv("60", sanitize(PIX_CONFIG.cidade, 15)) +
    tlv("62", tlv("05", sanitize(identificador, 25) || "***")) +
    "6304";

  const crc = crc16(payload);
  console.log("PIX Payload:", payload + crc);
  return payload + crc;
}

export function formatarBRL(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
