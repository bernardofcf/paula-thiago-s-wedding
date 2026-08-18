/**
 * Gerador de PIX Copia e Cola (BR Code EMV) estático.
 * Altere os dados abaixo pelos dados reais dos noivos.
 */
export const PIX_CONFIG = {
  /** Chave PIX: Para telefone celular no padrão BR Code, deve incluir +55 */
  chave: "+5591981174524",
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

function sanitizeChave(chave: string) {
  // Para chaves de telefone, mantemos o + e os números. 
  // O padrão BCB para telefone celular é +55DDNNNNNNNNN
  return chave.replace(/\s+/g, "");
}

/** Monta o payload PIX estático. Se valor for 0, o pagador insere o valor no app. */
export function gerarPixPayload(valor: number, identificador = "***") {
  const merchantAccount =
    tlv("00", "BR.GOV.BCB.PIX") + tlv("01", sanitizeChave(PIX_CONFIG.chave));

  let payload =
    tlv("00", "01") + // Payload Format Indicator
    tlv("01", "11") + // Point of Initiation Method (11 = Estático, 12 = Dinâmico)
    tlv("26", merchantAccount) +
    tlv("52", "0000") + // Merchant Category Code
    tlv("53", "986"); // Transaction Currency (986 = BRL)

  if (valor > 0) {
    payload += tlv("54", valor.toFixed(2));
  }

  payload +=
    tlv("58", "BR") + // Country Code
    tlv("59", sanitize(PIX_CONFIG.nome, 25)) + // Merchant Name
    tlv("60", sanitize(PIX_CONFIG.cidade, 15)) + // Merchant City
    tlv("62", tlv("05", sanitize(identificador, 25) || "***")) + // Additional Data Field Template
    "6304"; // CRC16

  return payload + crc16(payload);
}

export function formatarBRL(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
